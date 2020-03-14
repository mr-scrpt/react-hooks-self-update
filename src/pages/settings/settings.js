import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { putProfileRequest } from "modules/userProfile";
import {
  getUserAuth,
  getIsLoading,
  getIsError,
  resetUserAuthUser
} from "modules/userAuth";
/* import { CurrentUserContext } from "contexts/currentUserContext"; */
import { SettingsForm } from "components/settingsForm";
import { isEmptyObject } from "helpers/isEmptyObject";
import { logout } from "helpers/logout/logout";
const Page = ({ putProfileRequest, resetUserAuthUser, user }) => {
  const onSubmite = putUser => {
    console.log(putUser);
  };

  const logoutUser = () => {
    logout(resetUserAuthUser);
  };
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            {/* !!!Нет проверки на загрузку и вывода спиннера, потому что данные берутся из контекста а не по сети */}
            {!isEmptyObject(user) && (
              <SettingsForm
                user={user}
                onSubmit={onSubmite}
                logout={logoutUser}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: getUserAuth(state),
  loading: getIsLoading(state),
  error: getIsError(state)
});

const mapDispatchToProps = {
  putProfileRequest,
  resetUserAuthUser
};

export const Settings = connect(mapStateToProps, mapDispatchToProps)(Page);

/*  const apiURL = `user`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiURL);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);

  const [isLogout, setIsLogout] = useState(false);
  useEffect(() => {
    if (!isSubmit) return;
    doFetch({
      method: "PUT",
      data: {
        user: currentUserState.currentUser
      }
    });
  }, [currentUserState.currentUser, doFetch]);

  useEffect(() => {
    if (!response) return;
    setIsSuccessfulSubmit(true);
  }, [response]);

  if (isSuccessfulSubmit) {
    return <Redirect to={"/"} />;
  }

  if (isLogout) {
    return <Redirect to={`/`} />;
  } */
