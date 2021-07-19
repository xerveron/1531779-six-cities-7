import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
const numberOffers = 312;

ReactDOM.render(
  <React.StrictMode>
    <App numberOffers={numberOffers}/>
  </React.StrictMode>,
  document.getElementById('root'));
