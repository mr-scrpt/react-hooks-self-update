import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  fetchFeedsTagsRequest,
  getFeedsList,
  getFeedsCount,
  getFeedsLoading,
  getFeedsError,
  fetchLikeFeedRequest
} from "modules/feedsTags";

import { setFeedsTagsActive } from "modules/tagsPopular";

import { getPaginators } from "helpers/getPaginators";
import { limit } from "constant";
import { FeedsMediaBlock } from "components/feedsMediaBlock";

export const Component = ({
  feeds,
  feedsLoading,
  feedsError,
  feedsCount,
  fetchFeedsTagsRequest,
  setFeedsTagsActive,
  fetchLikeFeedRequest,
  location: { search },
  match: {
    url,
    params: { tagName }
  }
}) => {
  useEffect(() => {
    setFeedsTagsActive(tagName);
  }, [setFeedsTagsActive]);

  const { currentPage, offset } = getPaginators(search);

  useEffect(() => {
    fetchFeedsTagsRequest({ limit, offset, tagName });
  }, [fetchFeedsTagsRequest, currentPage, tagName]);

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
  fetchFeedsTagsRequest,
  fetchLikeFeedRequest,
  setFeedsTagsActive
};

export const FeedsTags = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
