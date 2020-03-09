import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  fetchProfileRequest,
  resetProfileStore,
  getUser,
  getUserIsLoading,
  getUserIsError
} from "modules/userProfile";
import { ShowErrors } from "components/showErrors";
import { ShowLoading } from "components/showLoading";
import { isEmptyObject } from "helpers/isEmptyObject";
import { UserInfo } from "components/userInfo";
import { UserFeedsSwitcher } from "components/userFeedsSwitcher";

const Component = ({
  fetchProfileRequest,
  resetProfileStore,
  user,
  userLoading,
  userError,
  match
}) => {
  const { slug } = match.params;

  useEffect(() => {
    fetchProfileRequest(slug);
    return () => {
      resetProfileStore();
    };
  }, [fetchProfileRequest]);

  return (
    <div className="profile-page">
      <ShowLoading loading={userLoading} />
      <ShowErrors errors={userError} />
      {!userLoading &&
        isEmptyObject(userError) &&
        user &&
        !isEmptyObject(user) && (
          <>
            <UserInfo user={user} />
            <UserFeedsSwitcher user={user} url={match.url} />
          </>
        )}
    </div>
  );
};

const mapStateToProps = state => ({
  user: getUser(state),
  userLoading: getUserIsLoading(state),
  userError: getUserIsError(state)
});
const mapDispatchToProps = {
  fetchProfileRequest,
  resetProfileStore
};

export const UserProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
