import { ActionType } from "./action";
import { Cities } from "../const";

const initialState = {
  city: Cities.find((city) => city.name === "Paris"),
  offers: [],
  currentOffer: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.OFFER_CHANGE:
      return {
        ...state,
        currentOffer: action.payload,
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

export { reducer };
