export const ActionType = {
  CITY_CHANGE: 'city/change',
  OFFERS_FILL: 'offers/fill',
  OFFER_CHANGE: 'offers/change',
};

export const ActionCreator = {
  cityChange: (city) => ({
    type: ActionType.CITY_CHANGE,
    payload: city,
  }),
  offersFill: (offers) => ({
    type: ActionType.OFFERS_FILL,
    payload: offers,
  }),
  offerChange: (offer) => ({
    type: ActionType.OFFER_CHANGE,
    payload: offer,
  }),
};
