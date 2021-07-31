import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import offerProp from '../card/offer.prop';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { favoriteOfferSend } from '../../store/api-actions';
import { APIRoute } from '../../const';
import { AuthorizationStatus } from '../../const';
import { useHistory } from 'react-router';


function Card(props) {
  const { offer, offerChange, hoverOffer, favoriteOffer, authorizationStatus } = props;
  const { previewImage, price, title, type, rating, isFavorite, id, isPremium } = offer;
  const stars = `${rating * 20}%`;
  const history = useHistory();
  return (
    <article className='cities__place-card place-card'
      onMouseEnter={() => hoverOffer(offer)}
      onMouseLeave={() => hoverOffer()}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link
          onClick={() => { hoverOffer(); offerChange(); }}
          to={`${AppRoute.PROPERTY}${id}`}
        >
          <img
            className='place-card__image'
            src={`${previewImage}`}
            width='260'
            height='200'
            alt={type}
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button
            onClick={authorizationStatus !== AuthorizationStatus.AUTH ? () => { history.push(AppRoute.LOGIN) } : () => { favoriteOffer(id, isFavorite ? 0 : 1); }}
            className={`place-card__bookmark-button place-card__bookmark-button${isFavorite ? '--active' : ''} button`}
            type='button'
          >


            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>In bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: stars }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link
            onClick={() => { hoverOffer(); offerChange(); }}
            to={`${AppRoute.PROPERTY}${id}`}
          >{title}
          </Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}


Card.propTypes = {
  offer: offerProp,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  offerChange() {
    dispatch(ActionCreator.offerChange());
  },
  hoverOffer(offer) {
    dispatch(ActionCreator.hoverOffer(offer));
  },
  favoriteOffer(id, isFavorite) {
    dispatch(favoriteOfferSend(id, isFavorite));
  },
});

export { Card };
export default connect(mapStateToProps, mapDispatchToProps)(Card);

