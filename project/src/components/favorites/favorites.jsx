import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../card/offer.prop';
import FavoriteList from '../favoriteList/favoriteList';
import { Cities } from '../../const';
import Header from '../header/header';
import { connect } from 'react-redux';

const offerFilter = (offers, city) =>
  offers.filter((offer) => offer.city.name === city.name);

function Favorites(props) {
  const { offers } = props;
  console.log(offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  console.log (favoriteOffers);
  const favoriteCities = Cities.filter((city) =>
    favoriteOffers
      .map((offer) => offer.city.name === city.name)
      .reduce((a, b) => a || b),
  );
  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              {favoriteCities.map((city, i) => (
                <FavoriteList
                  place={city.name}
                  offers={offerFilter(favoriteOffers, city)}
                  key={city.name}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export  {Favorites}
export default connect (mapStateToProps,null) (Favorites);
