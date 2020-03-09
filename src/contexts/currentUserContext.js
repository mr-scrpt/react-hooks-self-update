import React, { createContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchCurrentUserRequest,
  getUserCurrentState,
  resetCurrentUser
  /*  getUserCurrent,
  getUserCurrentIsLoggedIn,
  getUserCurrentIsLoading,
  getUserCurrentIsError */
} from "modules/userCurrent";
import { isEmptyObject } from "helpers/isEmptyObject";

export const CurrentUserContext = createContext();

const Provider = ({
  children,
  userCurrentState,
  fetchCurrentUserRequest,
  resetCurrentUser
}) => {
  useEffect(() => {
    fetchCurrentUserRequest();
  }, [fetchCurrentUserRequest]);

  /* useEffect(() => {
    if (isEmptyObject(userCurrentState)) return;
    setUserContext({
      ...userCurrentState,
      loguot: resetCurrentUser
    });
  }, [userCurrentState]);

  console.log("userState", userContext);
  console.log("userCurrentState", userCurrentState); */

  return (
    <CurrentUserContext.Provider
      value={{ ...userCurrentState, dispatchLoguot: resetCurrentUser }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

const mapStateToProps = state => ({
  userCurrentState: getUserCurrentState(state)
  /* userCurrent: getUserCurrent(state),
  loggedIn: getUserCurrentIsLoggedIn(state),
  loading: getUserCurrentIsLoading(state),
  error: getUserCurrentIsError(state) */
});

const mapDispatchToProps = {
  fetchCurrentUserRequest,
  resetCurrentUser
};
export const CurrentUserProvider = connect(
  mapStateToProps,
  mapDispatchToProps
)(Provider);
