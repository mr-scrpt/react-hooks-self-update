import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  fetchFeedsGlobalRequest,
  getFeedsList,
  getFeedsCount,
  getFeedsLoading,
  getFeedsError,
  fetchLikeFeedRequest
} from "modules/feedsGlobal";

import { Feeds } from "components/feeds";
import { Pagination } from "components/pagination";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";

import { getPaginators } from "helpers/getPaginators";
import { limit } from "constant";

const Component = ({
  feedsList,
  loading,
  error,
  feedsCount,
  fetchFeedsGlobalRequest,
  fetchLikeFeedRequest,
  match: { url },
  location: { search }
}) => {
  const { currentPage, offset } = getPaginators(search);

  useEffect(() => {
    if (!fetchFeedsGlobalRequest) return;
    fetchFeedsGlobalRequest({ limit, offset });
  }, [fetchFeedsGlobalRequest, currentPage]);

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
  fetchFeedsGlobalRequest,
  fetchLikeFeedRequest
};

export const FeedsGlobal = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
