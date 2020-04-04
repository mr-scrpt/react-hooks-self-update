import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { fetchFeedsTagsRequest } from "modules/feedsTags";
import { Feeds } from "components/feedsList";

import { Pagination } from "components/pagination";
import { getPaginators } from "helpers/getPaginators";
import { limit } from "constant";

import { PopularTags } from "components/tags/tagsPopular";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";
import { FeedToggler } from "components/feedToggler";

export const Component = ({
  feedsList,
  loading,
  error,
  fetchFeedsTagsRequest,
  location: { search },
  match: {
    url,
    params: { tagName }
  }
}) => {
  const { currentPage, offset } = getPaginators(search);

  useEffect(() => {
    fetchFeedsTagsRequest({ limit, offset, tagName });
  }, [fetchFeedsTagsRequest, currentPage, tagName]);

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

            {feedsList && feedsList.data && !loading && (
              <>
                <Feeds articles={feedsList.data.articles} />
                <Pagination
                  total={feedsList.data.articlesCount}
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
const mapStateToProps = ({ feedsTagsStore }) => feedsTagsStore;

const mapDispatchToProps = {
  fetchFeedsTagsRequest
};

/* export const TagFeed = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Component) */
export const TagFeed = connect(mapStateToProps, mapDispatchToProps)(Component);
