import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { AcceesDenied } from "components/accessDenied";
import { LoadingPrivatPage } from "components/loadingPrivatPage";
import { getIsLoggedIn, getIsLoading } from "modules/userAuth";

const Router = ({ component, isLoggedIn, isLoading, ...rest }) => {
  let finalComponent = AcceesDenied;

  console.log("logged in", isLoggedIn);
  if (isLoading) {
    finalComponent = LoadingPrivatPage;
  } else if (isLoggedIn) {
    console.log("logged in", isLoggedIn);
    finalComponent = component;
  } else {
    finalComponent = AcceesDenied;
  }

  return <Route {...rest} component={finalComponent} />;
  /* const finalComponent = isLoggedIn ? component : AcceesDenied;

  return <Route {...rest} component={finalComponent} />; */

  //return <Route {...rest} component={component} />;

  /* if (isLoading) {
    console.log("загрузка", isLoading);

    return <ShowLoading loading={isLoading} />;
  } else if (isLoggedIn) {
    return <Route {...rest} component={component} />;
  } else {
    return <Redirect to="/" />;
  } */
};

const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state),
  isLoading: getIsLoading(state)
});

export const PrivatRoute = connect(mapStateToProps)(Router);
