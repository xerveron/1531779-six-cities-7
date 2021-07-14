import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/main';
import Card from './components/card/card';

ReactDOM.render(
  <React.StrictMode>
    <Main />
    <Card />
  </React.StrictMode>,
  document.getElementById('root'));
