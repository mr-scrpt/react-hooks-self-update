import React, { useEffect } from "react";
import { connect } from "react-redux";
import { General } from "layouts/general";
import {
  fetchFeedsGlobalRequest,
  getFeedsList,
  getFeedsCount,
  getFeedsLoading,
  getFeedsError,
  fetchLikeFeedRequest,
} from "modules/feedsGlobal";

import { getPaginators } from "helpers/getPaginators";
import { limit } from "constant";
/* import { FeedsMediaBlock } from "components/feedsMediaBlock"; */
const Component = ({
  feeds,
  feedsLoading,
  feedsError,
  feedsCount,
  fetchFeedsGlobalRequest,
  fetchLikeFeedRequest,
  match: { url },
  location: { search },
}) => {
  const { currentPage, offset } = getPaginators(search);

  useEffect(() => {
    if (!fetchFeedsGlobalRequest) return;
    fetchFeedsGlobalRequest({ limit, offset });
  }, [fetchFeedsGlobalRequest, currentPage]);

  return (
    <General>
      {/*  <FeedsMediaBlock
        feeds={feeds}
        feedsLoading={feedsLoading}
        feedsError={feedsError}
        feedsCount={feedsCount}
        fetchLikeFeedRequest={fetchLikeFeedRequest}
        limit={limit}
        currentPage={currentPage}
        url={url}
      /> */}
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
  fetchLikeFeedRequest,
};

export const FeedsGlobal = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
