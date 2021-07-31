import React from 'react';
import OfferList from '../offerList/offerList';
import PropTypes from 'prop-types';
import offerProp from '../card/offer.prop';
import Map from '../map/map';
import CitiesList from '../citiesList/citiesList';
import { connect } from 'react-redux';
import Header from '../header/header';
import Sort from '../sort/sort';

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
              <Sort/>
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
