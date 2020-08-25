import React from "react";
import { FeedsSerp } from "@cm/feedsSerp";
import { TagsPopular } from "@cm/tags";
import s from "./feedsMedia.module.css";

export const FeedsMedia = ({
  feeds,
  feedsLoading,
  feedsError,
  feedsCount,
  //fetchLikeFeedRequest,
  limit,
  currentPage,
  url,
}) => {
  return (
    <section className={s.media}>
      <div className={s.media__wrapper}>
        <div className={s.media__inner}>
          <div className={s.media__serp}>
            <FeedsSerp
              feeds={feeds}
              isLoading={feedsLoading}
              isError={feedsError}
              //dispatchToLikeToggle={fetchLikeFeedRequest}
              count={feedsCount}
              limit={limit}
              currentPage={currentPage}
              url={url}
            />
          </div>
          {/*  <div className={s.media__bar}>
            <TagsPopular />
          </div> */}
        </div>
      </div>
    </section>
  );
};
