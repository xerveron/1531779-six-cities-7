import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import offerProp from '../../props/offer.prop';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

function FavoriteList(props) {
  const { place, offers, onCityClick } = props;
  const items = offers.map((offer, i) => <Card offer={offer} key={offer.id} />);
  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <Link onClick={onCityClick} className='locations__item-link' to={AppRoute.ROOT}>
            <span>{place}</span>
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
  offers: PropTypes.arrayOf(offerProp).isRequired,
  place: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export {FavoriteList};
export default connect (null, mapDispatchToProps) (FavoriteList);
