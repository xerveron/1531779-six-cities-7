export const ActionType = {
  CITY_CHANGE: 'city/change',
  OFFERS_FILL: 'offers/fill',
  OFFER_CHANGE: 'offers/change',
  COMMENTS_FILL: 'comment/download',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirect',
  SAVE_AUTH_DATA: 'user/savedata',
  NEIGHBOUR_OFFER_FILL: 'offers/neighbour',
  CHANGE_SORT: 'offers/sort',
  HOVER_OFFER: 'offers/hover',
  FAVORITE_OFFER: 'offer/favorite',
};

export const ActionCreator = {
  cityChange: (city) => ({
    type: ActionType.CITY_CHANGE,
    payload: city,
  }),
  hoverOffer: (offer) => ({
    type: ActionType.HOVER_OFFER,
    payload: offer,
  }),
  favoriteOffer: (offer) => ({
    type: ActionType.FAVORITE_OFFER,
    payload: offer,
  }),
  changeSort: (currentSort) => ({
    type: ActionType.CHANGE_SORT,
    payload: currentSort,
  }),
  offersFill: (offers) => ({
    type: ActionType.OFFERS_FILL,
    payload: offers,
  }),
  offerChange: () => ({
    type: ActionType.OFFER_CHANGE,
  }),
  commentsFill: (comments) => ({
    type: ActionType.COMMENTS_FILL,
    payload: comments,
  }),
  saveAuthData: (data) => ({
    type: ActionType.SAVE_AUTH_DATA,
    payload:data,
  }),
  neighbourOffersFill: (neighbourOffers) => ({
    type: ActionType.NEIGHBOUR_OFFER_FILL,
    payload: neighbourOffers,
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
