import React, { useState, useEffect, useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useFetch, useLocalStorage } from 'hooks';
import { CurrentUserContext } from "contexts";
import { errorsList } from 'helpers/errorsList';

export const Autentifications = ({ match: { path } }) => {

  const isLoginPage = path === '/login'
  const pageTitle = isLoginPage ? 'Вход в аккаунт' : 'Регистрация аккаунта';
  const pageLink = isLoginPage ? '/registration' : '/login';
  const descriptionLink = isLoginPage ? 'Нет аккаунта?' : 'Уже есть аккаунт?'
  const [isSuccessefullSabmit, setIsSuccessefullSabmit] = useState(false)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([])
  const apiURL = isLoginPage ? 'users/login' : 'users'
  const [{ response, isLoading, error }, doFetch] = useFetch(apiURL);
  const [, setToken] = useLocalStorage('token');
  const [, dispatch] = useContext(CurrentUserContext);

  useEffect(() => {
    if (!response) return
    setToken(response.user.token)
    setIsSuccessefullSabmit(true);
    dispatch({ type: 'SET_AUTHORIZED', payload: response.user })

  }, [response, setToken, dispatch])

  useEffect(() => {
    if (error && error.errors) {
      const errors = errorsList(error.errors)
      setErrors(errors)
    }
  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = isLoginPage ? { email, password } : { email, password, username }

    doFetch({
      method: 'POST',
      data: {
        user
      }
    });
  }
  if (isSuccessefullSabmit) {
    return <Redirect to='/' />
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{pageTitle}</h1>
            <p className="text-xs-center">
              <NavLink to={pageLink}>
                {descriptionLink}
              </NavLink>
            </p>
            <form onSubmit={handleSubmit}>
              {errors && (
                <ul className="error-messages">
                  {errors.map(item => <li key={item}>{item}</li>)}
                </ul>
              )}
              <fieldset>
                {!isLoginPage && (
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </fieldset>
                )}
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type='submit'
                  disabled={isLoading}
                >
                  {pageTitle}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
