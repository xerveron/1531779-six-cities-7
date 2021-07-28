import React from 'react';
import OfferList from '../offerlist/offerlist';
import PropTypes from 'prop-types';
import offerProp from '../card/offer.prop';
import Map from '../map/map';
import CitiesList from '../citiesList/citiesList';
import { connect } from 'react-redux';

function Main(props) {
  const { offers, city } = props;
  const cityOffer = offers
    .filter((offer) => offer.city.name === city.name);
  return (
    <div className='page page--gray page--main'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link header__logo-link--active'>
                <img
                  className='header__logo'
                  src='img/logo.svg'
                  alt='6 cities logo'
                  width='81'
                  height='41'
                />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a
                    className='header__nav-link header__nav-link--profile'
                    href='#'
                  >
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__user-name user__name'>
                      Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <CitiesList/>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>
                {cityOffer.length} places to stay in {city.name}
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
              <OfferList
                cityOffer={cityOffer}
              />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  cityOffer={cityOffer}
                />
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
});

export {Main};
export default connect (mapStateToProps,null) (Main);
