import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import offerProp from '../card/offer.prop';
import { SortTypes } from '../../const';
import { connect } from 'react-redux';
import { sortOfferRating, sortOfferPriceHighToLow, sortOfferPriceLowToHigh } from '../../sortUtils';
import { ActionCreator } from '../../store/action';

function OfferList(props) {
  const { offers, currentSort } = props;
  let items = offers.slice();
  switch (currentSort) {
    case SortTypes[1]: {
      items.sort(sortOfferPriceLowToHigh);
      break;
    }
    case SortTypes[2]: {
      items.sort(sortOfferPriceHighToLow);
      break;
    }
    case SortTypes[3]: {
      items.sort(sortOfferRating);
      break;
    }
    default:
      items = offers.slice();
      break;
  }
  return (
    <div className='cities__places-list places__list tabs__content'>
      {items.map((offer) => <Card offer={offer} key={offer.id}/>)}
    </div>
  );
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  currentSort: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentSort: state.currentSort,
});

const mapDispatchToProps = (dispatch) => ({
  offerChange() {
    dispatch(ActionCreator.offerChange());
  },

});

export { OfferList };
export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
