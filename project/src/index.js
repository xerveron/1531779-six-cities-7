/*eslint no-use-before-define: ["error", { "variables": false }]*/
/*eslint-env es6*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import thunk from 'redux-thunk';
import { createAPI } from './services/api';
import { ActionCreator } from './store/action';
import { AuthorizationStatus } from './const';
import { checkAuth, fetchOffersList } from './store/api-actions';
import { redirect } from './middlewares/redirect';


const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);


store.dispatch(checkAuth());
store.dispatch(fetchOffersList());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

