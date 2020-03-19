import React from "react";
import { connect } from "react-redux";

import {
  getUserAuth,
  getIsLoading,
  getIsError,
  resetUserAuthUser,
  putUserAuthRequest
} from "modules/userAuth";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";
import { SettingsForm } from "components/settingsForm";
import { isEmptyObject } from "helpers/isEmptyObject";
import { logout } from "helpers/logout/logout";
const Page = ({
  resetUserAuthUser,
  putUserAuthRequest,
  user,
  isLoading,
  isError
}) => {
  const onSubmite = putUser => {
    console.log(putUser);
    putUserAuthRequest(putUser);
  };

  const logoutUser = () => {
    logout(resetUserAuthUser);
  };
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <ShowLoading loading={isLoading} />
            <ShowErrors errors={isError} />
            {!isLoading && !isEmptyObject(user) && (
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
  isLoading: getIsLoading(state),
  isError: getIsError(state)
});

const mapDispatchToProps = {
  putUserAuthRequest,
  resetUserAuthUser
};

export const Settings = connect(mapStateToProps, mapDispatchToProps)(Page);
