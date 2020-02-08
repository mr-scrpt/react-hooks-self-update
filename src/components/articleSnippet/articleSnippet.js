import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TagList } from 'components/tagList';
import { AddToFavorite } from 'components/addToFavorite';
import { CurrentUserContext } from 'contexts/currentUserContext';

export const ArticleSnippet = ({ item }) => {
  const {
    title,
    slug,
    createdAt,
    tagList,
    description,
    favorited,
    favoritesCount,
    author: {
      username, image
    }
  } = item;
  const [currentUserState] = useContext(CurrentUserContext);

  return (
    <div className='article-preview'>
      <div className='article-meta'>
        <Link to={`/profiles/${username}`}>
          <img src={`${image ? image : 'https://dummyimage.com/100x100/abq/fre'}`} alt="" />
        </Link>
        <div className="info">
          <Link className="author" to={`/profiles/${username}`}>
            {username}
          </Link>
          <span className='data'>{createdAt}</span>
        </div>
        <div className="pull-xs-right">
          <AddToFavorite
            isFavorited={favorited}
            favoritesCount={favoritesCount}
            articleSlug={slug}
            currentUser={currentUserState}
          />
        </div>

      </div>
      <Link className="preview-link" to={`/articles/${slug}`}>
        <h1 className="">{title}</h1>
      </Link>
      <p>{description}</p>
      <Link className="preview-link" to={`articles/${slug}`}>
        Читать далее...
      </Link>
      <ul className='tag-list'>
        <TagList tagList={tagList} />
      </ul>

    </div>
  )
}


