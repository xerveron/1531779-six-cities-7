import {ActionType} from './action';

const initialState = {
  city: 'Paris',
  offers: [],
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
      };
    default:
      return state;
  }
};


export {reducer};
