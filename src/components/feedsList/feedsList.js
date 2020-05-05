import React from "react";
import { FeedSnippet } from "components/feedSnippet";
import { FeedsEmpty } from "components/feedsEmpty";
import { ShowErrors } from "components/showErrors";
import { ShowLoading } from "components/showLoading";
import { Pagination } from "components/pagination";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import s from "./feedsList.module.scss";
export const FeedsList = ({
  feeds,
  isLoading,
  isError,
  dispatchToLikeToggle,
  count,
  limit,
  currentPage,
  url,
}) => {
  return (
    <div className="feeds-list">
      <FeedsEmpty length={feeds.length} />
      <ShowLoading loading={isLoading} />
      <ShowErrors errors={isError} />
      <TransitionGroup className="list-wrapper" component="div">
        {!isLoading &&
          !isError &&
          feeds.map((feed, idx) => (
            <CSSTransition
              key={idx}
              timeout={50 * (idx + 1)}
              classNames={{
                enter: s.enter,
                enterActive: s.active,
                enterDone: s.done,
                exit: s.exit,
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
      <Pagination
        total={count}
        limit={limit}
        url={url}
        currentPage={currentPage}
      />
    </div>
  );
};
