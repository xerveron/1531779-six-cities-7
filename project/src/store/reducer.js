import { ActionType } from './action';
import { Cities, AuthorizationStatus } from '../const';

const initialState = {
  city: Cities.find((city) => city.name === 'Paris'),
  offers: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
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
        isDataLoaded: true,
      };
    default:
      return state;
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
  }
};

export { reducer };
