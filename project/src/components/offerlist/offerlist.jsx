import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import offerProp from '../card/offer.prop';
import { connect } from 'react-redux';

function OfferList(props) {
  const { offers,currentSort } = props;
  const items = offers
    .map((offer) => <Card offer={offer} key={offer.id} />);
  return (
    <div className='cities__places-list places__list tabs__content'>
      {items}
    </div>
  );
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

const mapStateToProps = (state) => ({
  currentSort: state.currentSort,
});

export {OfferList};
export default connect (mapStateToProps,null)(OfferList);
