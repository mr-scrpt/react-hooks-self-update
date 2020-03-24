import React from "react";
import { ArticleSnippet } from "components/articleSnippet";
import { FeedsEmpty } from "components/feedsEmpty";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./feeds.css";

export const Feeds = ({ articles, dispatchToLikeToggle }) => {
  if (!articles.length) return <FeedsEmpty />;
  return (
    <>
      <TransitionGroup className="list-wrapper" component="div">
        {articles.map((article, idx) => (
          <CSSTransition
            key={idx}
            timeout={1130 * (idx + 1)}
            classNames="feed"
            appear={true}
          >
            <ArticleSnippet
              item={article}
              key={idx}
              dispatchToLikeToggle={dispatchToLikeToggle}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
