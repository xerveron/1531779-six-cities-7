import React from 'react';
import { ActionCreator } from '../../store/action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SortTypes } from '../../const';

function Sort(props) {
  console.log(props);

  const { currentSort, onSortClick } = props;

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex='0'>
        {currentSort}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className='places__options places__options--custom places__options--opened'>
        {SortTypes.map((sortType) => <li className='places__option places__option--active' tabIndex='0' key={sortType} onClick={() => { onSortClick(sortType); }}>{sortType}</li>,
        )}
      </ul>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSortClick(currentSort) {
    dispatch(ActionCreator.changeSort(currentSort));
  },
});

const mapStateToProps = (state) => ({
  currentSort: state.currentSort,
});

Sort.propTypes = {
  onSortClick: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
};


export { Sort };
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
