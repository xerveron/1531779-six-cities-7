import React from 'react';
import { Cities } from '../../const';
import { connect } from 'react-redux';
import cityProp from '../../props/city.prop';
import PropTypes from 'prop-types';
import { ActionCreator } from '../../store/action';

function CitiesList(props) {
  const { onCityClick, currentCity } = props;
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {Cities.map((city) => (
            <li className='locations__item' key={city.name} onClick={() => { onCityClick(city); }}>
              <a onClick={(event) => { event.preventDefault(); }} href='/' className={`locations__item-link tabs__item${city.name === currentCity.name ? '--active' : ''}`}>
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

const mapStateToProps = (state) => ({
  currentCity: state.city,
});

CitiesList.propTypes = {
  currentCity: cityProp,
  onCityClick: PropTypes.func.isRequired,
};


export { CitiesList };
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
