import React, { useEffect, useState } from "react";

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
import { FeedsList } from "components/feedsList";

import { getPaginators } from "helpers/getPaginators";

import { limit } from "constant";

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
  fetchFeedsTagsRequest,
  setFeedsTagsActive,
  fetchLikeFeedRequest
};

export const FeedsTags = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
