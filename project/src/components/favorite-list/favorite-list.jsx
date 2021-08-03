import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import offerProp from '../../props/offer.prop';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import cityProp from '../../props/city.prop';

function FavoriteList(props) {
  const { place, offers, onCityClick } = props;
  const items = offers.map((offer) => <Card offer={offer} key={offer.id} />);
  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <Link onClick={() => onCityClick(place)} className='locations__item-link' to={AppRoute.ROOT}>
            <span>{place.name}</span>
          </Link>
        </div>
      </div>
      <div className='favorites__places'>
        {items}
      </div>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.cityChange(city));
  },
});

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(offerProp.isRequired).isRequired,
  place: cityProp,
  onCityClick: PropTypes.func.isRequired,
};

export {FavoriteList};
export default connect (null, mapDispatchToProps) (FavoriteList);
