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

import { getPaginators } from "helpers/getPaginators";
import { limit } from "constant";
import { FeedsPageTemplate } from "templates/feedsPageTemplate";
const Component = ({
  feeds,
  feedsLoading,
  feedsError,
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
    <FeedsPageTemplate
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
  fetchFeedsGlobalRequest,
  fetchLikeFeedRequest
};

export const FeedsGlobal = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
