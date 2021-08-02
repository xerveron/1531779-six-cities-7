import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reviewSend } from '../../store/api-actions';

function SendReview({ onSubmit, id }) {
  const [comment, setComment] = useState('');
  const [star, setStar] = useState('');
  const submitRef = useRef(null);
  const reviewRef = useRef(null);
  const starRef = useRef(null);
  useEffect(() => {
    submitRef.current.disabled = true;
    reviewRef.current.setAttribute('minlength', '50');
    reviewRef.current.setAttribute('maxlength', '300');
  });
  useEffect(() => {
    if (star.length === 0 || comment.length < 50 || comment.length > 300) {
      submitRef.current.disabled = true;
      reviewRef.current.reportValidity();
    }
    if (star.length > 0 && comment.length >= 50 && comment.length <= 300) {
      submitRef.current.disabled = false;
    }
  }, [star, comment]);
  const handleSubmitClick = (event) => {
    event.preventDefault();
    Array.from(event.target.elements).forEach(
      (element) => (element.disabled = true),
    );
    onSubmit(comment, star, id, event,submitRef.current);
    setStar('');
    setComment('');
  };
  const handleStarChange = (event) => {
    setStar(event.target.value);
  };
  const handleInputChange = () => {
    setComment(reviewRef.current.value);
  };

  return (
    <form
      className='reviews__form form'
      action='#'
      method='post'
      onSubmit={handleSubmitClick}
    >
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        <input
          ref={starRef}
          onClick={handleStarChange}
          className='form__rating-input visually-hidden'
          name='rating'
          value='5'
          id='5-stars'
          type='radio'
        />
        <label
          htmlFor='5-stars'
          className='reviews__rating-label form__rating-label'
          title='perfect'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          onClick={handleStarChange}
          className='form__rating-input visually-hidden'
          name='rating'
          value='4'
          id='4-stars'
          type='radio'
        />
        <label
          htmlFor='4-stars'
          className='reviews__rating-label form__rating-label'
          title='good'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          onClick={handleStarChange}
          className='form__rating-input visually-hidden'
          name='rating'
          value='3'
          id='3-stars'
          type='radio'
        />
        <label
          htmlFor='3-stars'
          className='reviews__rating-label form__rating-label'
          title='not bad'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          onClick={handleStarChange}
          className='form__rating-input visually-hidden'
          name='rating'
          value='2'
          id='2-stars'
          type='radio'
        />
        <label
          htmlFor='2-stars'
          className='reviews__rating-label form__rating-label'
          title='badly'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          onClick={handleStarChange}
          className='form__rating-input visually-hidden'
          name='rating'
          value='1'
          id='1-star'
          type='radio'
        />
        <label
          htmlFor='1-star'
          className='reviews__rating-label form__rating-label'
          title='terribly'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>
      </div>
      <textarea
        onChange={handleInputChange}
        ref={reviewRef}
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
      >
      </textarea>
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay
          with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          ref={submitRef}
          className='reviews__submit form__submit button'
          type='submit'
          disabled='disabled'
        >
          Submit
        </button>
      </div>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit(comment, star, id, event, submitRef) {
    dispatch(reviewSend(comment, star, id, event, submitRef));
  },
});

SendReview.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export { SendReview };
export default connect(null, mapDispatchToProps)(SendReview);
