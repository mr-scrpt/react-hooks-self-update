import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  fetchFeedsFollowRequest,
  getFeedsList,
  getFeedsCount,
  getFeedsLoading,
  getFeedsError
} from "modules/feedsFollow";

import { Feeds } from "components/feeds";
import { Pagination } from "components/pagination";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";

import { getPaginators } from "helpers/getPaginators";
import { isEmptyObject } from "helpers/isEmptyObject";
import { limit } from "constant";

const Component = ({
  feedsList,
  feedsCount,
  loading,
  error,
  fetchFeedsFollowRequest,
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

      {!loading && isEmptyObject(error) && feedsList.length && (
        <>
          <Feeds articles={feedsList} />
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
  fetchFeedsFollowRequest
};

export const FeedsFollow = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
