import React from 'react';
import { Cities } from '../../const';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ActionCreator } from '../../store/action';

function CitiesList(props) {
  const {onCityClick} = props;
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {Cities.map((city) => (
            <li className='locations__item' key={city.name} onClick={() => {onCityClick(city);}}>
              <a className='locations__item-link tabs__item' href='#'>
                <span>{city.name}</span>
              </a>
            </li>))}
        </ul>
      </section>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.cityChange(city));
  },
});

CitiesList.propTypes = {
  onCityClick: PropTypes.func.isRequired,
};


export {CitiesList};
export default connect(null, mapDispatchToProps)(CitiesList);
