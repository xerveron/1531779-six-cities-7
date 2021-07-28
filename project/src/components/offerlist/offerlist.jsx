
import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import offerProp from '../card/offer.prop';

function OfferList(props) {
  const { offers } = props;
  const items = offers
    .map((offer, i) => <Card offer={offer} key={offer.id} />);
  return (
    <div className='cities__places-list places__list tabs__content'>
      {items}
    </div>
  );
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};


export default OfferList;
