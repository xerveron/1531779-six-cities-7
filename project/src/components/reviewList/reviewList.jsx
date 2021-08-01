import React from 'react';
import Review from '../review/review';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SendReview from '../sendReview/sendReview';
import commentProp from '../../props/comment.prop';
import { fetchOfferComments } from '../../store/api-actions';
import { AuthorizationStatus } from '../../const';
import { sortCommentDate } from '../../sortUtils';

function ReviewList(props) {
  const { comments, authorizationStatus, id } = props;

  return (
    <section className='property__reviews reviews'>
      <h2 className='reviews__title'>
        Reviews &middot; <span className='reviews__amount'>{comments.length}</span>
      </h2>
      <ul className='reviews__list'>
        {comments
          .sort(sortCommentDate)
          .map((comment) => <Review review={comment} key={comment.id} />)}
      </ul>
      {authorizationStatus === AuthorizationStatus.AUTH ? <SendReview id={id} /> : ''}
    </section>

  );

}

const mapDispatchToProps = (dispatch) => ({
  downloadComments(id) {
    dispatch(fetchOfferComments(id));
  },
});

const mapStateToProps = (state) => ({
  comments: state.comments,
  authorizationStatus: state.authorizationStatus,
});

ReviewList.propTypes = {
  comments: commentProp,
  authorizationStatus:PropTypes.string.isRequired,
  id:PropTypes.number.isRequired,
};

export { ReviewList };
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);


