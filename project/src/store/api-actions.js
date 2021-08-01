import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';
import { adaptOffer,adaptComment,adaptAuthData } from '../utils';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.offersFill(data.map(adaptOffer))))
);

export const fetchNeighbourOffersList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY}`)
    .then(({data}) => dispatch(ActionCreator.neighbourOffersFill(data.map(adaptOffer))))
);

export const fetchOfferComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${id}`)
    .then(({data}) => dispatch(ActionCreator.commentsFill(data.map(adaptComment))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.saveAuthData(adaptAuthData(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const favoriteOfferSend = (id,status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}${id}/${status}`)
    .then(({data}) => dispatch(ActionCreator.favoriteOffer(adaptOffer(data))))
    .catch(() => {})
);

export const reviewSend = (comment,rating,id) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}${id}`, {comment,rating})
    .then(({data}) => dispatch(ActionCreator.commentsFill(data.map(adaptComment))))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
