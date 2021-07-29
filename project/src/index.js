import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import comments from './mocks/comment';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import { ActionCreator } from './store/action';
import { AuthorizationStatus } from './const';
import {checkAuth, fetchOffersList} from './store/api-actions';


const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);


store.dispatch(checkAuth());
store.dispatch(fetchOffersList());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} comments={comments} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

