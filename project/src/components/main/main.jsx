import React from 'react';
import OfferList from '../offerList/offerList';
import PropTypes from 'prop-types';
import offerProp from '../card/offer.prop';
import Map from '../map/map';
import CitiesList from '../citiesList/citiesList';
import { connect } from 'react-redux';
import Header from '../header/header';

function Main(props) {
  const { city,offers } = props;
  const cityOffers = offers.filter((offer) => offer.city.name === city.name);
  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <CitiesList />
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>
                {cityOffers.length} places to stay in {city.name}
              </b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex='0'>
                  Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='#icon-arrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--custom places__options--opened'>
                  <li
                    className='places__option places__option--active'
                    tabIndex='0'
                  >
                    Popular
                  </li>
                  <li className='places__option' tabIndex='0'>
                    Price: low to high
                  </li>
                  <li className='places__option' tabIndex='0'>
                    Price: high to low
                  </li>
                  <li className='places__option' tabIndex='0'>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OfferList offers={cityOffers} />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map offers={cityOffers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

export { Main };
export default connect(mapStateToProps, null)(Main);
