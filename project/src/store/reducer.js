import { ActionType } from './action';
import { Cities, AuthorizationStatus, SortTypes } from '../const';
import { pushArrayElement } from '../utils';

const initialState = {
  city: Cities.find((city) => city.name === 'Paris'),
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  offers: [],
  comments: [],
  neighbourOffers: [],
  isOffersLoaded: false,
  isCommentsLoaded: false,
  isNeighbourOffersLoaded: false,
  currentSort: SortTypes[0],
  favoriteOffer: {},
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.HOVER_OFFER:
      return {
        ...state,
        hoverOffer: action.payload,
      };
    case ActionType.FAVORITE_OFFER:
      console.log (state.offers);
      return {
        ...state,
        offers: pushArrayElement(state.offers,action.payload.id,action.payload),
      };
    case ActionType.OFFER_CHANGE:
      return {
        ...state,
        isNeighbourOffersLoaded: false,
        isCommentsLoaded: false,
      };
    case ActionType.OFFERS_FILL:
      return {
        ...state,
        offers: action.payload,
        isOffersLoaded: true,
      };
    case ActionType.NEIGHBOUR_OFFER_FILL:
      return {
        ...state,
        neighbourOffers: action.payload,
        isNeighbourOffersLoaded: true,
      };
    case ActionType.COMMENTS_FILL:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        currentSort: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export { reducer };
