import React, { useRef } from 'react';
import { ActionCreator } from '../../store/action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SortTypes } from '../../const';

function Sort(props) {
  const dropDownRef = useRef (null);
  const { currentSort, onSortClick } = props;
  const handleDropDownClick = (reference) => {
    reference.current.classList.add ('places__options--opened');
  };
  const handleDropDownClose = (reference) => {
    reference.current.classList.remove('places__options--opened');
  }

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex='0' onClick={() => {handleDropDownClick(dropDownRef);}}>
        {currentSort}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul ref={dropDownRef} className='places__options places__options--custom'>
        {SortTypes.map((sortType) => <li className='places__option places__option--active' tabIndex='0' key={sortType} onClick={() => { onSortClick(sortType); handleDropDownClose(dropDownRef);}}>{sortType}</li>,
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
