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
    "btn-small": true,
    pink: favorited,
    teal: !favorited
  });

  const liker = () => {
    dispatchToLikeToggle({ slug, favorited });
  };

  return (
    <button className={buttonClasses} onClick={liker} disabled={!isLoggedIn}>
      <i class="material-icons left">
        {!favorited ? "favorite_border" : "favorite"}
      </i>
      <span>{favoritesCount}</span>
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
