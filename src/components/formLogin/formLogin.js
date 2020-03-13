import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { fieldShort } from "validators";
import { errorsList } from "helpers/errorsList";
export const FormLogin = ({ submitForm, loading, errorsServer }) => {
  const { register, handleSubmit, errors: errorsForm } = useForm();

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Авторизируйтесь</h1>
            <p className="text-xs-center">
              <NavLink to="/registration">Нет аккаунта?</NavLink>
            </p>
            <form onSubmit={handleSubmit(submitForm)}>
              {errorsServer && (
                <ul className="error-messages">
                  {errorsList(errorsServer).map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    ref={fieldShort(register)}
                  />
                  {errorsForm.email && <p>{errorsForm.email.message}</p>}
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Пароль"
                    ref={fieldShort(register)}
                  />
                  {errorsForm.password && <p>{errorsForm.password.message}</p>}
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={loading}
                >
                  Войти
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
