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

import { getPaginators } from "helpers/getPaginators";
import { limit } from "constant";
import { FeedsMediaBlock } from "components/feedsMediaBlock";

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
    <FeedsMediaBlock
      feeds={feeds}
      feedsLoading={feedsLoading}
      feedsError={feedsError}
      feedsCount={feedsCount}
      fetchLikeFeedRequest={fetchLikeFeedRequest}
      limit={limit}
      currentPage={currentPage}
      url={url}
    />
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
