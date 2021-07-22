import React from 'react';
import offerProp from '../card/offer.prop';


function Card(props) {
  const {previewImage, price, title} = props.offer;
  return (
    <article className='cities__place-card place-card'>
      <div className='cities__image-wrapper place-card__image-wrapper'>
        {console.log(previewImage)}
        <a href='#'>
          <img
            className='place-card__image'
            src={`img/${previewImage}`}
            width='260'
            height='200'
            alt='Place image'
          />
        </a>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button
            className='place-card__bookmark-button place-card__bookmark-button--active button'
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
            <span style={{ width: '80%' }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='#'>{title}</a>
        </h2>
        <p className='place-card__type'>Private room</p>
      </div>
    </article>
  );
}


Card.propTypes = {
  offer: offerProp,
};

export default Card;
