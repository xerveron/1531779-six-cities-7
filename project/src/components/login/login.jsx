import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cityProp from '../../props/city.prop';
import { connect } from 'react-redux';
import { login } from '../../store/api-actions';
import Header from '../header/header';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

function Login({ onSubmit,city }) {
  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  const handlePassChange = () => {
    if (passwordRef.current.value.replace(/\s/g, '').length === 0) {
      passwordRef.current.setCustomValidity('Нельзя использовать только пробелы!');
    } else {
      passwordRef.current.setCustomValidity('');
    }
  };
  useEffect(() => {
    passwordRef.current.setCustomValidity('Нельзя использовать только пробелы!');
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };
  return (
    <div className='page page--gray page--login'>
      <Header />
      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form className='login__form form' action='#' method='post' onSubmit={handleSubmit}>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input
                  ref={loginRef}
                  className='login__input form__input'
                  type='email'
                  name='email'
                  placeholder='Email'
                  required=''
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input
                  ref={passwordRef}
                  onChange={handlePassChange}
                  className='login__input form__input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  required=''
                />
              </div>
              <button
                className='login__submit form__submit button'
                type='submit'
              >
                Sign in
              </button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <Link className='locations__item-link' to={AppRoute.ROOT}>
                <span>{city.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  city: cityProp,
};


const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

const mapStateToProps = (state) => ({
  city: state.city,
});

export { Login };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
