import React, { useContext, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from "contexts/currentUserContext";

export const PrivatRoute = ({ component, ...rest }) => {
  const [currentUserState] = useContext(CurrentUserContext);
  //const [isLoggedIn, setIsLoggedIn] = useState(true);

  console.log("currentUserState", currentUserState);

  if (currentUserState.isLoading) {
    return <Route {...rest} render={() => <div>Загрузка</div>} />;
  }

  if (!currentUserState.isLoading && !currentUserState.isLoggedIn) {
    return <Route {...rest} render={() => <div>Доступ запрещен</div>} />;
  }

  return <Route {...rest} component={component} />;
  /* useEffect(() => {
    if (currentUserState) {
      setIsLoggedIn(currentUserState.isLoggedIn);
    }
  }, [currentUserState]);

  if (!isLoggedIn && isLoggedIn !== null) {
    return <Redirect to={"/login"} />;
  } */

  //return <Route {...rest} component={component} />;
};
