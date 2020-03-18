import React, { useContext, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ShowLoading } from "components/showLoading";
import { getIsLoggedIn, getIsLoading, getIsInitial } from "modules/userAuth";
/* import { CurrentUserContext } from "contexts/currentUserContext"; */

const Router = ({ component, isLoggedIn, isLoading, isInitial, ...rest }) => {
  if (isInitial) {
    console.log("инициализация успешна", isInitial);
    if (isLoading) {
      return <ShowLoading loading={isLoading} />;
    }
    if (isLoggedIn) {
      return <Route {...rest} component={component} />;
    }

    return <Redirect to="/" />;
  }
  console.log("инициализация неуспешна", isInitial);
  return <ShowLoading loading={isLoading} />;
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
  isLoading: getIsLoading(state),
  isInitial: getIsInitial(state)
});

export const PrivatRoute = connect(mapStateToProps)(Router);
/* const [currentUserState] = useContext(CurrentUserContext); */
//const [isLoggedIn, setIsLoggedIn] = useState(true);

/* console.log("currentUserState", currentUserState);

  if (currentUserState.isLoading) {
    return <Route {...rest} render={() => <div>Загрузка</div>} />;
  }

  if (!currentUserState.isLoading && !currentUserState.isLoggedIn) {
    return <Route {...rest} render={() => <div>Доступ запрещен</div>} />;
  }

  return <Route {...rest} component={component} />; */
/* useEffect(() => {
    if (currentUserState) {
      setIsLoggedIn(currentUserState.isLoggedIn);
    }
  }, [currentUserState]);

  if (!isLoggedIn && isLoggedIn !== null) {
    return <Redirect to={"/login"} />;
  } */

//return <Route {...rest} component={component} />;
