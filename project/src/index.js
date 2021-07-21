import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import comments from './mocks/comment';
const numberOffers = 312;

ReactDOM.render(
  <React.StrictMode>
    <App numberOffers={numberOffers} offers={offers} comments={comments}/>
  </React.StrictMode>,
  document.getElementById('root'));
