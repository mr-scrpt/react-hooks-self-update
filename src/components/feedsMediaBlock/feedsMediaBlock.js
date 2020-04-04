import React from "react";
import { FeedsList } from "components/feedsList";
import { TabsMainFeeds } from "components/tabs";
import { TagsPopular } from "components/tags";
import s from "./feedsMediaBlock.module.scss";
import { Banner } from "components/banner";
export const FeedsMediaBlock = ({
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
    <section className="page">
      <Banner />
      <div className="container page">
        <div className="row">
          <div className={s.feedCol}>
            <TabsMainFeeds />
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
          <div className={s.tagsCol}>2{/*  <TagsPopular /> */}</div>
        </div>
      </div>
    </section>
  );
};
