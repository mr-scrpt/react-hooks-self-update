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
import { getPaginators } from "helpers/getPaginators";
import { limit } from "constant";

import { PopularTags } from "components/popularTags";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";
import { FeedToggler } from "components/feedToggler";

const Component = ({
  feedsList,
  feedsCount,
  loading,
  error,
  fetchFeedsFollowRequest,
  location: { search },
  match: {
    url,
    params: { tagName }
  }
}) => {
  useEffect(() => {
    if (!fetchFeedsFollowRequest) return;
    fetchFeedsFollowRequest({ limit: 10, offset });
  }, [fetchFeedsFollowRequest]);

  const { currentPage, offset } = getPaginators(search);

  console.log(feedsList);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium clone</h1>
          <p>Место для обмена знаниями</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler tagName={tagName} />
            <ShowLoading loading={loading} />
            <ShowErrors errors={error} />

            {!loading && feedsList.length && (
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
          </div>
          <div className="col-md-3">
            <PopularTags search={search} />
          </div>
        </div>
      </div>
    </div>
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
