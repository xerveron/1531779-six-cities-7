import React from 'react';
import PropTypes from 'prop-types';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { logout } from '../../store/api-actions';
import { ActionCreator } from '../../store/action';

function Header({authorizationStatus, logoutNow, offerChange}) {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link
              onClick={() => {offerChange();}}
              className='header__logo1-link header__logo-link--active'
              to={AppRoute.ROOT}
            >
              <img
                className='header__logo'
                src='img/logo.svg'
                alt='6 cities logo'
                width='81'
                height='41'
              />
            </Link>
          </div>
          <nav className='header__nav'>


            <ul className='header__nav-list'>
              <li className='header__nav-item user'>
                <Link
                  className='header__nav-link header__nav-link--profile'
                  to={authorizationStatus === AuthorizationStatus.AUTH ?
                    AppRoute.FAVORITES
                    : AppRoute.LOGIN}
                >
                  <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                  {authorizationStatus === AuthorizationStatus.AUTH ?
                    <span className='header__user-name user__name'>
                      {localStorage.getItem('email')}
                    </span> : <span className="header__login">Sign in</span>}
                </Link>
              </li>
              {authorizationStatus === AuthorizationStatus.AUTH ?
                <li className='header__nav-item'>
                  <Link
                    className='header__nav-link'
                    onClick={(evt) => {
                      evt.preventDefault();
                      logoutNow();
                    }}
                    to='/'
                  >
                    <span className='header__signout'>Sign out</span>
                  </Link>
                </li> : ''}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  offerChange:PropTypes.func.isRequired,
  logoutNow:PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  authData: state.authData,
});

const mapDispatchToProps = (dispatch) => ({
  offerChange() {
    dispatch(ActionCreator.offerChange());
  },
  logoutNow() {
    dispatch(logout());
  },
});

export { Header };
export default connect(mapStateToProps, mapDispatchToProps)(Header);

