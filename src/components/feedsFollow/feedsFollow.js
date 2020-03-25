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

import { Feeds } from "components/feedsList";
import { Pagination } from "components/pagination";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";

import { getPaginators } from "helpers/getPaginators";
import { limit } from "constant";

const Component = ({
  feedsList,
  feedsCount,
  loading,
  error,
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
    <>
      <ShowLoading loading={loading} />
      <ShowErrors errors={error} />

      {!loading && !error && (
        <>
          <Feeds
            articles={feedsList}
            dispatchToLikeToggle={fetchLikeFeedRequest}
          />
          <Pagination
            total={feedsCount}
            limit={limit}
            url={url}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};
const mapStateToProps = state => ({
  feedsList: getFeedsList(state),
  feedsCount: getFeedsCount(state),
  loading: getFeedsLoading(state),
  error: getFeedsError(state)
});
const mapDispatchToProps = {
  fetchFeedsFollowRequest,
  fetchLikeFeedRequest
};

export const FeedsFollow = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
