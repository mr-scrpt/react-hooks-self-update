import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import cx from "classnames";

import { fetchLikeFeedRequest } from "modules/feedsGlobal";
import { getIsLoggedIn } from "modules/userAuth";

const Component = ({
  isLoggedIn,
  slug,
  favorited,
  favoritesCount,
  dispatchToLikeToggle
}) => {
  const buttonClasses = cx({
    btn: true,
    "btn-sm": true,
    "btn-primary": favorited,
    "btn-outline-primary": !favorited
  });

  const liker = () => {
    dispatchToLikeToggle({ slug, favorited });
  };

  return (
    <button className={buttonClasses} onClick={liker} disabled={!isLoggedIn}>
      <i className="ion-heart"></i>
      <span>&nbsp; {favoritesCount}</span>
    </button>
  );
};
const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state)
});
const mapDispatchToProps = {
  fetchLikeFeedRequest
};
export const AddToFavorite = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
