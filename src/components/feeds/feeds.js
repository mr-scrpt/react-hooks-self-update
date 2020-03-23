import React from "react";
import { ArticleSnippet } from "components/articleSnippet";
import { FeedsEmpty } from "components/feedsEmpty";

import { WithAnimationFlash } from "hoc/withAnimationFlash";
export const Feeds = ({ articles, dispatchToLikeToggle }) => {
  if (!articles.length) return <FeedsEmpty />;
  return (
    <>
      <WithAnimationFlash>
        <div className="list-wrapper">
          {articles.map((article, idx) => (
            <ArticleSnippet
              item={article}
              key={idx}
              dispatchToLikeToggle={dispatchToLikeToggle}
            />
          ))}
        </div>
      </WithAnimationFlash>
    </>
  );
};
