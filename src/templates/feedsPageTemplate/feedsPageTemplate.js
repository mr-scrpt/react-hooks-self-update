import React from "react";
import { FeedsList } from "components/feedsList";
import { Tabs } from "components/tabs";
import { PopularTags } from "components/popularTags";

export const FeedsPageTemplate = ({
  feeds,
  feedsLoading,
  feedsError,
  feedsCount,
  fetchLikeFeedRequest,
  limit,
  currentPage,
  url
}) => {
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
            <Tabs />
            <FeedsList
              feeds={feeds}
              isLoading={feedsLoading}
              isError={feedsError}
              dispatchToLikeToggle={fetchLikeFeedRequest}
              count={feedsCount}
              limit={limit}
              currentPage={currentPage}
              url={url}
            />
          </div>
          <div className="col-md-3">
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
};
