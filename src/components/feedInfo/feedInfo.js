import React from "react";
import { Link } from "react-router-dom";
import { TagsList } from "components/tags";
import { BarEditor } from "components/barEditor";
import { BarSocialActivity } from "components/barSocialActivity";
import s from "./feedinfo.module.css";
export const FeedInfo = ({ article, articleDelete, user, isLoggedIn }) => {
  const {
    title,
    slug,
    body,
    tagList,
    description,
    author,
    favorited,
    favoritesCount,
    createdAt,
  } = article;

  const isAuthor = () => {
    if (!article || !isLoggedIn) return false;
    return author.username === user.username;
  };

  return (
    <div className={s.articlePage}>
      <div className="banner">
        <div className="container">
          <h1 className="article">{title}</h1>
          <div className="article-meta">
            <Link to={`/profile/${author.username}`}>
              <img src={author.image} alt={author.username} />
            </Link>
            <div className="info">
              <Link to={`/profile/${author.username}`} className={s.authorname}>
                {author.username}
              </Link>
              <span className="date">{createdAt}</span>
              {isAuthor() && (
                <Link to={`/articles/${slug}/edit`}>Редактовровать</Link>
              )}
            </div>
            {isAuthor() && (
              <BarEditor slug={slug} articleDelete={articleDelete} />
            )}
            {!isAuthor() && (
              <BarSocialActivity
                favorited={favorited}
                favoritesCount={favoritesCount}
                author={author.username}
                slug={slug}
              />
            )}
          </div>
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            <div>
              <p>{body}</p>
              <p>{description}</p>
            </div>
            <TagsList tagsList={tagList} />
          </div>
        </div>
      </div>
    </div>
  );
};
