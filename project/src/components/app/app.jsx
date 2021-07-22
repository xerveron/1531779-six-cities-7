import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import NotFoundScreen from '../notfoundscreen/notfoundscreen';
import offerProp from '../card/offer.prop';

function App(props) {
  const {numberOffers, offers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main
            numberOffers={numberOffers}
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route path={AppRoute.PROPERTY}>
          <Property />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  numberOffers: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default App;
