import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  fetchFeedsFollowRequest,
  getFeedsList,
  getFeedsCount,
  getFeedsLoading,
  getFeedsError,
  fetchLikeFeedRequest
} from "modules/feedsFollow";

import { FeedsList } from "components/feedsList";

import { getPaginators } from "helpers/getPaginators";
import { limit } from "constant";

const Component = ({
  feeds,
  feedsLoading,
  feedsError,
  feedsCount,
  fetchFeedsFollowRequest,
  fetchLikeFeedRequest,
  location: { search },
  match: { url }
}) => {
  useEffect(() => {
    if (!fetchFeedsFollowRequest) return;
    fetchFeedsFollowRequest({ limit, offset });
  }, [fetchFeedsFollowRequest]);

  const { currentPage, offset } = getPaginators(search);

  return (
    <div>
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
    </div>
  );
};
const mapStateToProps = state => ({
  feeds: getFeedsList(state),
  feedsLoading: getFeedsLoading(state),
  feedsError: getFeedsError(state),
  feedsCount: getFeedsCount(state)
});
const mapDispatchToProps = {
  fetchFeedsFollowRequest,
  fetchLikeFeedRequest
};

export const FeedsFollow = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
