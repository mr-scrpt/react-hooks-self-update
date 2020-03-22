import React from "react";
import { ArticleSnippet } from "components/articleSnippet";
import { FeedsEmpty } from "components/feedsEmpty";
export const Feeds = ({ articles, dispatchToLikeToggle }) => {
  if (!articles.length) return <FeedsEmpty />;
  return (
    <>
      {articles.map((article, idx) => (
        <ArticleSnippet
          item={article}
          key={idx}
          dispatchToLikeToggle={dispatchToLikeToggle}
        />
      ))}
    </>
  );
};
