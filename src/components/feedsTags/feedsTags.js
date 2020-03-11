import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import {
  fetchFeedsTagsRequest,
  getFeedsList,
  getFeedsCount,
  getFeedsLoading,
  getFeedsError
} from "modules/feedsTags";

import { setFeedsTagsActive } from "modules/tagsPopular";
import { Feeds } from "components/feeds";
import { Pagination } from "components/pagination";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";

import { getPaginators } from "helpers/getPaginators";
import { isEmptyObject } from "helpers/isEmptyObject";
import { limit } from "constant";

export const Component = ({
  feedsList,
  loading,
  error,
  feedsCount,
  fetchFeedsTagsRequest,
  setFeedsTagsActive,
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
  fetchFeedsTagsRequest,
  setFeedsTagsActive
};

export const FeedsTags = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
