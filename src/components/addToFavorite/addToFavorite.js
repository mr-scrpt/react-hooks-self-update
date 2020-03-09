import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import { setFeedIsFavirited, removeFeedIsFavirited } from "modules/feedEditor";
import { getIsLoggedIn } from "modules/userAuth";

const Component = ({
  isFavorited,
  favoritesCount,
  articleSlug,
  isLoggedIn
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!favoritesCount) return;
    setCount(favoritesCount);
  }, [favoritesCount]);

  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    if (!isFavorited) return;
    setFavorited(isFavorited);
  }, [isFavorited]);

  const [request, setRequest] = useState({});

  const handleLike = async () => {
    if (favorited) {
      setRequest(await removeFeedIsFavirited(articleSlug));
    } else {
      setRequest(await setFeedIsFavirited(articleSlug));
    }
  };
  useEffect(() => {
    if (request.data) {
      setCount(request.data.article.favoritesCount);
      setFavorited(request.data.article.favorited);
    }
  }, [request]);

  const buttonClasses = classNames({
    btn: true,
    "btn-sm": true,
    "btn-primary": favorited,
    "btn-outline-primary": !favorited
  });

  return (
    <button
      className={buttonClasses}
      onClick={handleLike}
      disabled={!isLoggedIn}
    >
      <i className="ion-heart"></i>
      <span>&nbsp; {count}</span>
    </button>
  );
};
const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state)
});
const mapDispatchToProps = {};
export const AddToFavorite = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
