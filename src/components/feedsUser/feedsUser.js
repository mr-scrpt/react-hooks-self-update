import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchUserFeedsRequest,
  getUser,
  getFeedsList,
  getFeedsLoading,
  getFeedsError,
  getFeedsCount,
  resetUserFeedsStore,
  fetchLikeFeedRequest
} from "modules/userProfile";

import { limit } from "constant";
import { isEmptyObject } from "helpers/isEmptyObject";
import { getPaginators } from "helpers/getPaginators";

import { FeedsList } from "components/feedsList";

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
    <FeedsList
      feeds={feeds}
      isLoading={feedsLoading}
      isError={feedsError}
      dispatchToLikeToggle={fetchLikeFeedRequest}
      count={feedsCount}
      limit={limit}
      currentPage={currentPage}
      url={url}
    />
  );
};

const mapStateToProps = state => ({
  user: getUser(state),
  feeds: getFeedsList(state),
  feedsLoading: getFeedsLoading(state),
  feedsError: getFeedsError(state),
  feedsCount: getFeedsCount(state)
});

const mapDispatchToProps = {
  fetchUserFeedsRequest,
  resetUserFeedsStore,
  fetchLikeFeedRequest
};

export const FeedsUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
