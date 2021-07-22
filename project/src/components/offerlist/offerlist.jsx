
import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import offerProp from '../card/offer.prop';

function OfferList(props) {
  const { offers } = props;
  return (
    <div className='cities__places-list places__list tabs__content'>
      <Card
        offer={offers[0]}
      />
      <Card
        offer={offers[1]}
      />
      <Card
        offer={offers[2]}
      />
      <Card
        offer={offers[3]}
      />
    </div>
  );
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default OfferList;
