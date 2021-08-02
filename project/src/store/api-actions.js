import { ActionCreator } from './action';
import { AuthorizationStatus, AppRoute, APIRoute } from '../const';
import { adaptOffer, adaptComment, adaptAuthData } from '../utils';
import { popUp } from '../pop-up/pop-up';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({ data }) => dispatch(ActionCreator.offersFill(data.map(adaptOffer))))
    .catch((err) => { popUp(`Ошибка доступа к серверу: ${err}`); })
);

export const fetchNeighbourOffersList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY}`)
    .then(({ data }) => dispatch(ActionCreator.neighbourOffersFill(data.map(adaptOffer))))
    .catch((err) => { popUp(`Ошибка доступа к серверу: ${err}`); })
);

export const fetchOfferComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${id}`)
    .then(({ data }) => dispatch(ActionCreator.commentsFill(data.map(adaptComment))))
    .catch((err) => { popUp(`Ошибка доступа к серверу: ${err}`); })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { })
);

export const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then(({ data }) => dispatch(ActionCreator.saveAuthData(adaptAuthData(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch((err) => { popUp(`Ошибка доступа к серверу: ${err}`); })
);

export const favoriteOfferSend = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}${id}/${status}`)
    .then(({ data }) => dispatch(ActionCreator.favoriteOffer(adaptOffer(data))))
    .catch((err) => { popUp(`Ошибка доступа к серверу: ${err}`); })
);

export const reviewSend = (comment, rating, id, event, submitRef) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}${id}`, { comment, rating })
    .then(({ data }) => {
      event.target.reset();
      Array.from(event.target.elements).forEach((element) => element.disabled = false);
      submitRef.disabled = true;
      dispatch(ActionCreator.commentsFill(data.map(adaptComment)));
    })
    .catch((err) => {
      Array.from(event.target.elements).forEach((element) => element.disabled = false);
      popUp(`Ошибка доступа к серверу: ${err}`); })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .catch((err) => { popUp(`Ошибка доступа к серверу: ${err}`); })
);
