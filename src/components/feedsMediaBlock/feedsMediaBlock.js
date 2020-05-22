import React from "react";
import { FeedsList } from "components/feedsList";
import { TabsMainFeeds } from "components/tabs";
import { TagsPopular } from "components/tags";
import s from "./feedsMediaBlock.module.css";

export const FeedsMediaBlock = ({
  feeds,
  feedsLoading,
  feedsError,
  feedsCount,
  fetchLikeFeedRequest,
  limit,
  currentPage,
  url,
}) => {
  return (
    <section className={`${s.media} ${s.media_wrapper}`}>
      <div className={s.media__inner}>
        <div className={s.media__serp}>
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
        <div className={s.media__bar}>
          <TagsPopular />
        </div>
      </div>
    </section>
  );
};
