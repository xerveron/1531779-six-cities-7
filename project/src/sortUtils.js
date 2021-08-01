import dayjs from 'dayjs';

export const sortCommentDate = (commentA, commentB) => dayjs(commentB.date).diff(dayjs(commentA.date));

export const sortOfferRating = (OfferA, OfferB) => OfferB.rating-OfferA.rating;

export const sortOfferPriceHighToLow = (OfferA, OfferB) => OfferB.price-OfferA.price;

export const sortOfferPriceLowToHigh = (OfferA, OfferB) => OfferA.price-OfferB.price;
