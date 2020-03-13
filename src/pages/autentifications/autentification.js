import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  setAuthUserRequest,
  getIsLoggedIn,
  getIsLoading,
  getIsError
} from "modules/userAuth";

import { FormLogin } from "components/formLogin";
import { ShowLoading } from "components/showLoading";
import type_here from "components/formRegistration";

const Component = ({
  setAuthUserRequest,
  isLoggedIn,
  loading,
  errorsServer
}) => {
  const submitForm = user => {
    setAuthUserRequest(user);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <ShowLoading loading={loading} />
      <FormLogin
        submitForm={submitForm}
        loading={loading}
        errorsServer={errorsServer}
      />
    </>
  );
};
const mapDispatchToProps = {
  setAuthUserRequest
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
