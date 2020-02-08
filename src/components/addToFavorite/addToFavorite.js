import React, { useEffect, useState } from 'react';
import { useFetch } from 'hooks/useFetch';
import classNames from 'classnames';
export const AddToFavorite = ({ isFavorited, favoritesCount, articleSlug, currentUser }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const apiURL = `/articles/${articleSlug}/favorite`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiURL);
  const favoritesWithResponse = response
    ? response.article.favoritesCount
    : favoritesCount;
  const isFavoritedWithResponse = response
    ? response.article.favorited
    : isFavorited

  useEffect(() => {
    if (response) {
      console.log(response);
    }


  }, [response]);


  useEffect(() => {
    if (currentUser && currentUser.isLoading) {
      setIsLoggedIn(true)
    }
  }, [currentUser]);

  const handleLike = e => {
    e.preventDefault();
    isFavoritedWithResponse ? doFetch({ method: "DELETE" }) : doFetch({ method: "POST" })
  }

  const buttonClasses = classNames({
    btn: true,
    'btn-sm': true,
    'btn-primary': isFavoritedWithResponse,
    'btn-outline-primary': !isFavoritedWithResponse
  })
  return (
    <button className={buttonClasses} onClick={handleLike} disabled={isLoggedIn}>
      <i className="ion-heart"></i>
      <span>&nbsp; {favoritesWithResponse}</span>
    </button>
  )
}