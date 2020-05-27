import React, { useEffect, useState } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import { fetchFeedsGlobalRequest } from "modules/feedsGlobal";
import { FeedToggler } from "components/feedToggler";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";
import { Feeds } from "@cm/feedsSerp";
import { Pagination } from "components/pagination";
import { PopularTags } from "components/tags/tagsPopular";
import { getPaginators } from "helpers/getPaginators";
const Page = ({
  feeds,
  loading,
  error,
  fetchFeedsGlobalRequest,
  match: { url },
  location: { search },
}) => {
  const { currentPage, offset } = getPaginators(search);
  const [feedsList, setFeedsList] = useState(null);

  useEffect(() => {
    if (!fetchFeedsGlobalRequest) return;
    fetchFeedsGlobalRequest({ limit: 10, offset });
  }, [fetchFeedsGlobalRequest, currentPage]);

  useEffect(() => {
    if (!feeds) return;
    setFeedsList(feeds.data);
  }, [feeds]);

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
            <FeedToggler />

            <ShowLoading loading={loading} />
            <ShowErrors errors={error} />

            {feedsList && !loading && (
              <>
                <Feeds articles={feedsList.articles} />
                <Pagination
                  total={feedsList.articlesCount}
                  limit={10}
                  url={url}
                  currentPage={currentPage}
                />
              </>
            )}
          </div>
          <div className="col-md-3">
            {/* <PopularTags search={search} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ feedsStore }) => feedsStore;
const mapDispatchToProps = {
  fetchFeedsGlobalRequest,
};

export const TestPage = compose(connect(mapStateToProps, mapDispatchToProps))(
  Page
);
