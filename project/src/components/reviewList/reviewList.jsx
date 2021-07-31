import React from 'react';
import Review from '../review/review';
import { connect } from 'react-redux';
import LoadingScreen from '../loadingScreen/loadingScreen';
import { isCheckedAuth } from '../../utils';
import SendReview from '../sendReview/sendReview';
import { fetchOfferComments } from '../../store/api-actions';

function ReviewList(props) {
  const {comments} = props;

  return (
    <section className='property__reviews reviews'>
      <h2 className='reviews__title'>
        Reviews &middot; <span className='reviews__amount'>{1}</span>
      </h2>
      <ul className='reviews__list'>
        {comments.map((comment) => <Review review={comment} key={comment.id} />)}
      </ul>
      <SendReview />
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
});

export { ReviewList };
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);


