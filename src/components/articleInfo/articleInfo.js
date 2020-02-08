import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TagList } from 'components/tagList';
import { CurrentUserContext } from 'contexts';

export const ArticleInfo = ({ article, slug, articleDelete }) => {
  const { title, body, tagList, description, author, favirited, faviritedCount, createdAt } = article;
  const [currentUserState] = useContext(CurrentUserContext);


  const isAuthor = () => {
    if (!article || !currentUserState.isLoggedIn) return false
    return (
      author.username === currentUserState.currentUser.username
    );

  }

  return (
    <div className='article-page'>
      <div className="banner">
        <div className="container">
          <h1 className="article">{title}</h1>
          <div className="article-meta">
            <Link to={`/profile/${author.username}`} >
              <img src={author.image} alt={author.username} />
            </Link>
            <div className="info">
              <Link to={`/profile/${author.username}`} >
                {author.username}
              </Link>
              <span className="date">{createdAt}</span>
              <Link to={`/articles/${slug}/edit`}>Редактовровать</Link>
            </div>
            {isAuthor() && (
              <span>
                <Link to={`/articles/${slug}/edit`} className="btn btn-outline-secondary btn-sm">
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

  )
}