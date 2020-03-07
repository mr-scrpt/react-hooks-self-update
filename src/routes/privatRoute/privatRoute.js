import React, { useContext, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from "contexts/currentUserContext";

export const PrivatRoute = ({ component, ...rest }) => {
  const [currentUserState] = useContext(CurrentUserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (currentUserState) {
      setIsLoggedIn(currentUserState.isLoggedIn);
    }
  }, [currentUserState]);
  if (!isLoggedIn && isLoggedIn !== null) {
    return <Redirect to={"/login"} />;
  }

  return <Route {...rest} component={component} />;
};
