import PropTypes from 'prop-types';
import { ApartType } from '../../const';

export default PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.shape({
    location:PropTypes.shape({
      latitude:PropTypes.number.isRequired,
      longitude:PropTypes.number.isRequired,
      zoom:PropTypes.number.isRequired,
    }).isRequired,
    name:PropTypes.string.isRequired,
  }).isRequired,
  description:PropTypes.string.isRequired,
  goods:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  host:PropTypes.shape({
    avatar:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    isPro:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
  }).isRequired,
  id:PropTypes.number.isRequired,
  images:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isFavorite:PropTypes.bool.isRequired,
  isPremium:PropTypes.bool.isRequired,
  location:PropTypes.shape({
    latitude:PropTypes.number.isRequired,
    longitude:PropTypes.number.isRequired,
    zoom:PropTypes.number.isRequired,
  }).isRequired,
  maxAdults:PropTypes.number.isRequired,
  previewImage:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  rating:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  type:PropTypes.oneOf([ApartType]).isRequired,
  genre: PropTypes.string.isRequired,
}).isRequired;
