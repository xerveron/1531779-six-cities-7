export const ActionType = {
  CITY_CHANGE: 'city/change',
  OFFERS_FILL: 'offers/fill',
  OFFER_CHANGE: 'offers/change',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirect',
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
