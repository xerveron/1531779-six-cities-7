import React from 'react';
import commentProp from '../../props/comment.prop';
import dayjs from 'dayjs';

function Review({review}) {
  const { comment, user, rating,date } = review;
  const stars = `${rating*20}%`;
  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={user.avatarUrl}
            width='54'
            height='54'
            alt='Reviews avatar'
          />
        </div>
        <span className='reviews__user-name'>{user.name}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: stars }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>
          {comment}
        </p>
        <time className='reviews__time' dateTime={dayjs(date).format ('YYYY-MM-DD')}>
          {dayjs(date).format ('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: commentProp,
};

export default Review;
