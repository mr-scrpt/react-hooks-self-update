import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchUserFeedsRequest,
  getUser,
  getUserFeeds,
  getUserFeedsIsLoading,
  getUserFeedsIsError,
  getUserFeedsCount,
  resetUserFeedsStore,
  fetchLikeFeedRequest
} from "modules/userProfile";

import { limit } from "constant";
import { isEmptyObject } from "helpers/isEmptyObject";
import { getPaginators } from "helpers/getPaginators";

import { Feeds } from "components/feeds";
import { ShowErrors } from "components/showErrors";
import { ShowLoading } from "components/showLoading";
import { Pagination } from "components/pagination";

const Component = ({
  user,
  fetchUserFeedsRequest,
  resetUserFeedsStore,
  feeds,
  feedsLoading,
  feedsError,
  feedsCount,
  fetchLikeFeedRequest,
  match: { url },
  location: { search }
}) => {
  const { currentPage, offset } = getPaginators(search);

  useEffect(() => {
    if (isEmptyObject(user)) return;

    fetchUserFeedsRequest({
      author: user.username,
      limit,
      offset
    });
    return () => {
      resetUserFeedsStore();
    };
  }, [fetchUserFeedsRequest, user, url, search]);

  return (
    <div>
      <ShowLoading loading={feedsLoading} />
      <ShowErrors errors={feedsError} />
      {!feedsLoading && !feedsError && (
        <>
          <Feeds articles={feeds} dispatchToLikeToggle={fetchLikeFeedRequest} />
          <Pagination
            total={feedsCount}
            limit={limit}
            url={url}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  user: getUser(state),
  feeds: getUserFeeds(state),
  feedsLoading: getUserFeedsIsLoading(state),
  feedsError: getUserFeedsIsError(state),
  feedsCount: getUserFeedsCount(state)
});

const mapDispatchToProps = {
  fetchUserFeedsRequest,
  resetUserFeedsStore,
  fetchLikeFeedRequest
};

export const UserFeeds = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
