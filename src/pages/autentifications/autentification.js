import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  sendUserToAuthRequest,
  sendUserToRegistrationRequest,
  getIsLoggedIn,
  getIsLoading,
  getIsError,
  resetAuthUserError
} from "modules/userAuth";

import { FormLogin } from "components/formLogin";
import { FormRegistration } from "components/formRegistration";
import { ShowLoading } from "components/showLoading";

const Component = ({
  sendUserToAuthRequest,
  sendUserToRegistrationRequest,
  resetAuthUserError,
  isLoggedIn,
  loading,
  errorsServer,
  match: { path }
}) => {
  useEffect(() => {
    return () => {
      resetAuthUserError();
    };
  }, [resetAuthUserError]);

  const submitLogin = user => {
    sendUserToAuthRequest(user);
  };
  const submitRegistration = user => {
    sendUserToRegistrationRequest(user);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <ShowLoading loading={loading} />
      {path === "/login" && (
        <FormLogin
          submitForm={submitLogin}
          loading={loading}
          errorsServer={errorsServer}
        />
      )}
      {path === "/registration" && (
        <FormRegistration
          submitForm={submitRegistration}
          loading={loading}
          errorsServer={errorsServer}
        />
      )}
    </>
  );
};
const mapDispatchToProps = {
  sendUserToAuthRequest,
  sendUserToRegistrationRequest,
  resetAuthUserError
};
const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state),
  loading: getIsLoading(state),
  errorsServer: getIsError(state)
});
export const Autentifications = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
