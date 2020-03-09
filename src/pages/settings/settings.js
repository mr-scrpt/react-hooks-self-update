import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { putProfileRequest } from "modules/userProfile";

import { CurrentUserContext } from "contexts/currentUserContext";
import { SettingsForm } from "components/settingsForm";
import { isEmptyObject } from "helpers/isEmptyObject";
import { logout } from "helpers/logout/logout";
const Page = ({ putProfileRequest }) => {
  const { user, dispatchLoguot } = useContext(CurrentUserContext);

  const onSubmite = putUser => {
    console.log(putUser);
  };

  const logoutUser = () => {
    logout(dispatchLoguot);
  };
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            {/* Нет проверки на загрузку и вывода спиннера, потому что данные берутся из контекста а не по сети */}
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  putProfileRequest
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
