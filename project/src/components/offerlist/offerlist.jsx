
import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import offerProp from '../card/offer.prop';

function OfferList (props) {
  const { offer } = props;
  return (
    <div className='cities__places-list places__list tabs__content'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

OfferList.propTypes = {
  offer: PropTypes.number.isRequired,
};

export default OfferList;
