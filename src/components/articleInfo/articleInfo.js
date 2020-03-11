import React from "react";
import { connect } from "react-redux";

import { getUserAuth, getIsLoggedIn } from "modules/userAuth";

import { Link } from "react-router-dom";
import { TagList } from "components/tagList";

const Component = ({ article, articleDelete, user, isLoggedIn }) => {
  const {
    title,
    slug,
    body,
    tagList,
    description,
    author,
    favirited,
    faviritedCount,
    createdAt
  } = article;

  const isAuthor = () => {
    if (!article || !isLoggedIn) return false;
    return author.username === user.username;
  };

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1 className="article">{title}</h1>
          <div className="article-meta">
            <Link to={`/profile/${author.username}`}>
              <img src={author.image} alt={author.username} />
            </Link>
            <div className="info">
              <Link to={`/profile/${author.username}`}>{author.username}</Link>
              <span className="date">{createdAt}</span>
              {isAuthor() && (
                <Link to={`/articles/${slug}/edit`}>Редактовровать</Link>
              )}
            </div>
            {isAuthor() && (
              <span>
                <Link
                  to={`/articles/${slug}/edit`}
                  className="btn btn-outline-secondary btn-sm"
                >
                  <i className="ion-edit"></i>
                  Редактировать
                </Link>
                &nbsp;
                <button
                  onClick={articleDelete}
                  className="btn btn-outline-danger btn-sm"
                >
                  <i className="ion-trash-a"></i>
                  Удалить
                </button>
              </span>
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
            <TagList tagList={tagList} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: getUserAuth(state),
  isLoggedIn: getIsLoggedIn(state)
});
export const ArticleInfo = connect(mapStateToProps)(Component);
