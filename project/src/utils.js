import { AuthorizationStatus } from './const';

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;

export const adaptOffer = (offer) => {
  const adaptedOffer = Object.assign(
    {},
    offer,
    {
      previewImage: offer.preview_image,
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      host: Object.assign({}, offer.host, { isPro: offer.host.is_pro, avatarUrl: offer.host.avatar_url}),
    },
  );
  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.host.avatar_url;

  return adaptedOffer;
};

export const adaptComment = (comment) => {
  const adaptedComment = Object.assign(
    {},
    comment,
    {
      user: Object.assign({}, comment.user, { isPro: comment.user.is_pro, avatarUrl:comment.user.avatar_url}),
    },
  );
  delete adaptedComment.user.is_pro;
  delete adaptedComment.user.avatar_url;
  return adaptedComment;
};

export const adaptAuthData = (data) => {
  const adaptedData = Object.assign(
    {},
    data,
    {
      avatarUrl:data.avatar_url,
      isPro: data.is_pro,
    },
  );
  delete adaptedData.avatar_url;
  delete adaptedData.is_pro;
  return adaptedData;
};


export const pushArrayElement = (array,index,element) => {
  const newArray = array.slice();
  newArray[index-1]=element;
  return newArray;};
