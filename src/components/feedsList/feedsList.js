import React, { useState, useEffect } from "react";

import { FeedSnippet } from "@cm/feedSnippet";
import { FeedsEmpty } from "@cm/feedsEmpty";
import { ShowErrors } from "@cm/showErrors";

import { SkeletonSnippet, SkeletonShow } from "@cm/skeleton";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import s from "./feedsList.module.css";
export const FeedsList = ({
  feeds,
  isLoading,
  isError,
  dispatchToLikeToggle,
}) => {
  return (
    <div className={s.feedList}>
      <FeedsEmpty length={feeds.length} />
      <ShowErrors errors={isError} />
      {isLoading && <SkeletonShow component={<SkeletonSnippet />} count={8} />}

      <TransitionGroup className={s.feedSerp__inner} component="div">
        {!isLoading &&
          !isError &&
          feeds.map((feed, idx) => (
            <CSSTransition
              key={idx}
              timeout={50 * (idx + 1)}
              classNames={{
                enter: s.feedList__enter,
                enterActive: s.feedList__active,
                enterDone: s.feedList__done,
                exit: s.feedList__exit,
              }}
            >
              <FeedSnippet
                item={feed}
                key={idx}
                dispatchToLikeToggle={dispatchToLikeToggle}
              />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};
