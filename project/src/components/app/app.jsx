import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

function App(props) {
  const {numberOffers} = props;
  return (
    <Main numberOffers={numberOffers}/>
  );
}

App.propTypes = {
  numberOffers: PropTypes.number.isRequired,
};

export default App;
