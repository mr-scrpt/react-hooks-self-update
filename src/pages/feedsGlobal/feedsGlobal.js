import React, { useEffect } from "react";
import { connect } from "react-redux";
import { General } from "layouts/general";
import {
  fetchFeedsGlobalRequest,
  fetchFeedsGlobalCountRequest,
  getFeedsList,
  getFeedsCount,
  getFeedsLoading,
  getFeedsError,
  fetchLikeFeedRequest,
} from "@md/feedsGlobal";

import { getPaginators } from "@hl/getPaginators";
import { limit } from "constant";
import { FeedsMedia } from "@cm/feedsMedia";
const Component = ({
  feeds,
  feedsLoading,
  feedsError,
  feedsCount,
  fetchFeedsGlobalRequest,
  fetchFeedsGlobalCountRequest,
  fetchLikeFeedRequest,
  match: { url },
  location: { search },
}) => {
  const { currentPage, offset } = getPaginators(search);

  /* useEffect(() => {
    if (!fetchFeedsGlobalRequest) return;
    fetchFeedsGlobalRequest({ limit, offset });
  }, [fetchFeedsGlobalRequest]); */

  useEffect(() => {
    if (!fetchFeedsGlobalRequest) return;

    fetchFeedsGlobalRequest({ limit, offset });
  }, [fetchFeedsGlobalRequest, currentPage]);

  useEffect(() => {
    if (!fetchFeedsGlobalCountRequest) return;

    fetchFeedsGlobalCountRequest();
  }, [fetchFeedsGlobalCountRequest]);

  return (
    <General>
      <FeedsMedia
        feeds={feeds}
        feedsLoading={feedsLoading}
        feedsError={feedsError}
        feedsCount={feedsCount}
        fetchLikeFeedRequest={fetchLikeFeedRequest}
        limit={limit}
        currentPage={currentPage}
        url={url}
      />
    </General>
  );
};

const mapStateToProps = (state) => ({
  feeds: getFeedsList(state),
  feedsLoading: getFeedsLoading(state),
  feedsError: getFeedsError(state),
  feedsCount: getFeedsCount(state),
});
const mapDispatchToProps = {
  fetchFeedsGlobalRequest,
  fetchFeedsGlobalCountRequest,
  fetchLikeFeedRequest,
};

export const FeedsGlobal = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
