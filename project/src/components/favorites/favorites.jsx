import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../card/offer.prop';
import FavoriteList from '../favoriteList/favoriteList';
import { Cities } from '../../const';

const offerFilter = (offers, city) => offers.filter((offer) => offer.city.name === city);

function Favorites(props) {
  const { offers } = props;
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  const favoriteCities = Cities.filter((city) => {
    for (let i=0;i<favoriteOffers.length;i++) {
      if (city===favoriteOffers[i].city.name) {return true;}
    }
  });
  return (
    <div className='page'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link' href='main.html'>
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
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              {favoriteCities.map((city, i) => <FavoriteList place={city} offers={offerFilter(favoriteOffers, city)} key={city} />
              )}
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

export default Favorites;
