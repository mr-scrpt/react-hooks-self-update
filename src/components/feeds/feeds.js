import React from 'react';
import { ArticleSnippet } from 'components/articleSnippet';

export const Feeds = ({ articles }) => {
  return (
    <>
      {articles.map((article, idx) => (
        <ArticleSnippet item={article} key={idx} />
      ))}
    </>
  )
}