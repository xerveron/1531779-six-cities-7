import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../props/offer.prop';
import commentProp from '../../props/comment.prop';
import ReviewList from '../review-list/review-list';
import Header from '../header/header';
import { connect } from 'react-redux';
import { fetchOfferComments, fetchNeighbourOffersList } from '../../store/api-actions';
import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { favoriteOfferSend } from '../../store/api-actions';
import { useHistory } from 'react-router';
import { AppRoute, AuthorizationStatus } from '../../const';
import { showStars } from '../../utils';

function Property(props) {
  const { offers, comments, neighbourOffers, downloadComments, downloadNeighbourOffersList, isCommentsLoaded, isNeighbourOffersLoaded, id, favoriteOffer,authorizationStatus } = props;
  const history = useHistory();
  if (id < 1 || id > offers.length || !Number.isInteger(+id)) {
    return <NotFoundScreen />;
  }
  const { description, title, price, goods, rating, type, bedrooms, maxAdults, images, isPremium, isFavorite, host } = offers[id - 1];
  const stars = showStars(rating);

  if (!isCommentsLoaded) {
    downloadComments(id);
  }
  if (!isNeighbourOffersLoaded) {
    downloadNeighbourOffersList(id);
  }

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {images.map((image) => (
                <div className='property__image-wrapper' key={image}>
                  <img
                    className='property__image'
                    src={image}
                    alt={`${title}`}
                  />
                </div>))}
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              {isPremium ? <div className='property__mark'><span>Premium</span></div> : ''}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>
                  {title}
                </h1>
                <button
                  className={`property__bookmark-button${isFavorite ? '--active' : ''} button`}
                  type='button'
                  onClick={authorizationStatus !== AuthorizationStatus.AUTH ? () => { history.push(AppRoute.LOGIN);} : () => { favoriteOffer(id, isFavorite ? 0 : 1); }}
                >
                  <svg
                    className='property__bookmark-icon'
                    width='31'
                    height='33'
                  >
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{ width: stars }}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>
                  {rating}
                </span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {bedrooms}
                </li>
                <li className='property__feature property__feature--adults'>
                  {maxAdults}
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  {goods.map((good) => <li className='property__inside-item' key={good}>{good}</li>)}
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    <img
                      className='property__avatar user__avatar'
                      src={`${host.avatarUrl}`}
                      width='74'
                      height='74'
                      alt='Host avatar'
                    />
                  </div>
                  <span className='property__user-name'>{host.name}</span>
                  <span className='property__user-status'>{host.isPro ? 'Pro' : ''}</span>
                </div>
                <div className='property__description'>
                  <p className='property__text'>
                    {description}
                  </p>
                </div>
              </div>
              {isCommentsLoaded ? <ReviewList comments={comments} id={id} /> : <LoadingScreen />}
            </div>
          </div>
          <section className='property__map map'>
            {neighbourOffers ? <Map offers={neighbourOffers} hoverOffer={offers[id - 1]} /> : <LoadingScreen />}
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <div className='near-places__list places__list'>
              {neighbourOffers ? <OfferList offers={neighbourOffers} /> : <LoadingScreen />}
            </div>
          </section>
        </div>
      </main>
    </div >
  );
}

Property.propTypes = {
  comments: PropTypes.arrayOf(commentProp).isRequired,
  neighbourOffers: PropTypes.arrayOf(offerProp.isRequired).isRequired,
  offers: PropTypes.arrayOf(offerProp.isRequired).isRequired,
  favoriteOffer:PropTypes.func.isRequired,
  authorizationStatus:PropTypes.string.isRequired,
  isCommentsLoaded:PropTypes.bool.isRequired,
  isNeighbourOffersLoaded:PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  downloadNeighbourOffersList: PropTypes.func.isRequired,
  downloadComments: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  comments: state.comments,
  neighbourOffers: state.neighbourOffers,
  isCommentsLoaded: state.isCommentsLoaded,
  isNeighbourOffersLoaded: state.isNeighbourOffersLoaded,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  downloadComments(id) {
    dispatch(fetchOfferComments(id));
  },
  downloadNeighbourOffersList(id) {
    dispatch(fetchNeighbourOffersList(id));
  },
  favoriteOffer(id, isFavorite) {
    dispatch(favoriteOfferSend(id, isFavorite));
  },
});

export { Property };
export default connect(mapStateToProps, mapDispatchToProps)(Property);
