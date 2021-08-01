import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../props/offer.prop';
import FavoriteList from '../favorite-list/favorite-list';
import { Cities } from '../../const';
import Header from '../header/header';
import { connect } from 'react-redux';

const offerFilter = (offers, city) =>
  offers.filter((offer) => offer.city.name === city.name);

function Favorites(props) {
  const { offers } = props;
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  let favoriteCities=[];
  if (favoriteOffers.length>0) {
    favoriteCities = Cities.filter((city) =>
      favoriteOffers
        .map((offer) => offer.city.name === city.name)
        .reduce((a, b) => a || b),
    );
  }
  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            {favoriteOffers.length === 0 ?
              <div className='favorites__status-wrapper'>
                <b className='favorites__status'>Nothing yet saved.</b>
                <p className='favorites__status-description'>Save properties to narrow down search or plan your future trips.</p>
              </div> :
              <ul className='favorites__list'>
                {favoriteCities.map((city, i) => (
                  <FavoriteList
                    place={city}
                    offers={offerFilter(favoriteOffers, city)}
                    key={city.name}
                  />
                ))}
              </ul>}
          </section>
        </div>
      </main>
    </div>
  );
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(offerProp.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export { Favorites };
export default connect(mapStateToProps, null)(Favorites);
