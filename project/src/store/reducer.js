import { ActionType } from './action';
import { Cities, AuthorizationStatus } from '../const';

const initialState = {
  city: Cities.find((city) => city.name === 'Paris'),
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  offers: [],
  comments: [],
  neighbourOffers: [],
  isOffersLoaded: false,
  isCommentsLoaded: false,
  isNeighbourOffersLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return {
        ...state,
        city: action.payload,
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
