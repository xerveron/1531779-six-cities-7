import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import offerProp from '../card/offer.prop';

function FavoriteList(props) {
  const { place, offers } = props;
  const items = offers.map((offer, i) => <Card offer={offer} key={offer.id} />);
  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='#'>
            <span>{place}</span>
          </a>
        </div>
      </div>
      <div className='favorites__places'>
        {items}
      </div>
    </li>
  );
}

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  place: PropTypes.string.isRequired,
};

export default FavoriteList;
