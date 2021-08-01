import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../utils';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../browser-history';
import { Redirect } from 'react-router';

function App(props) {
  const { authorizationStatus, isOffersLoaded } = props;
  if (isCheckedAuth(authorizationStatus) || !isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          {authorizationStatus === AuthorizationStatus.AUTH ? <Redirect to={AppRoute.ROOT} /> : <Login />}
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites />}
        >
        </PrivateRoute>
        <Route path='/offer/:id'>
          {({ match }) => <Property id={match.params.id} />}
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isOffersLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isOffersLoaded: state.isOffersLoaded,
});


export { App };
export default connect(mapStateToProps, null)(App);
