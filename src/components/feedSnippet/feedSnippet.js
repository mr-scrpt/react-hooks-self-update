import React from "react";
import { Link } from "react-router-dom";
import { TagList } from "components/tagList";
import { AddToFavorite } from "components/addToFavorite";

export const FeedSnippet = ({ item, dispatchToLikeToggle }) => {
  const {
    title,
    slug,
    createdAt,
    tagList,
    description,
    favorited,
    favoritesCount,
    author: { username, image }
  } = item;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/profile/${username}`}>
          <img
            src={`${image ? image : "https://dummyimage.com/100x100/abq/fre"}`}
            alt=""
          />
        </Link>
        <div className="info">
          <Link className="author" to={`/profile/${username}`}>
            {username}
          </Link>
          <span className="data">{createdAt}</span>
        </div>
        <div className="pull-xs-right">
          <AddToFavorite
            favorited={favorited}
            favoritesCount={favoritesCount}
            slug={slug}
            dispatchToLikeToggle={dispatchToLikeToggle}
          />
        </div>
      </div>
      <Link className="preview-link" to={`/articles/${slug}`}>
        <h1 className="">{title}</h1>
      </Link>
      <p>{description}</p>
      <Link className="preview-link" to={`/articles/${slug}`}>
        Читать далее...
      </Link>
      <ul className="tag-list">
        <TagList tagList={tagList} />
      </ul>
    </div>
  );
};
