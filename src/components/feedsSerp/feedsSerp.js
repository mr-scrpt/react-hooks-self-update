import React from "react";
import { TabsMainFeeds } from "@cm/tabs";
import { FeedsList } from "@cm/feedsList";
import { Pagination } from "@cm/pagination";

export const FeedsSerp = ({
  feeds,
  isLoading,
  isError,
  dispatchToLikeToggle,
  count,
  limit,
  currentPage,
  url,
}) => {
  console.log("-> count", count);
  return (
    <>
      <TabsMainFeeds />
      <FeedsList
        feeds={feeds}
        isLoading={isLoading}
        isError={isError}
        dispatchToLikeToggle={dispatchToLikeToggle}
      />
      <Pagination
        total={count}
        limit={limit}
        url={url}
        currentPage={currentPage}
      />
    </>
  );
};
