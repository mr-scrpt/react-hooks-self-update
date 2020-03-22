import React from "react";
import { connect } from "react-redux";
import cx from "classnames";

import {
  fetchLikeFeedRequest,
  deleteFeed,
  setAuthorToFollowRequest,
  getUserIsFollow
} from "modules/feedEditor";

/* 

Сделать экшены которые будут изменять одно свойство в стейте ...state.favorited

*/
export const Component = ({
  favorited,
  favoritesCount,
  author,
  fetchLikeFeedRequest,
  setAuthorToFollowRequest,
  slug,
  isFollow
}) => {
  const likeCx = cx({
    btn: true,
    "btn-sm": true,
    "btn-primary": favorited,
    "btn-outline-primary": !favorited
  });

  const followCx = cx({
    btn: true,
    "btn-sm": true,
    "btn-secondary": !isFollow,
    "btn-outline-danger": isFollow
  });

  const liker = () => {
    fetchLikeFeedRequest({ slug, favorited });
  };

  const follower = () => {
    setAuthorToFollowRequest({ author, isFollow });
  };
  return (
    <>
      <span>
        <button className={likeCx} onClick={liker}>
          <i className="ion-heart"></i>
          &nbsp; Лайк ({favoritesCount})
        </button>
        &nbsp;
        <button onClick={follower} className={followCx}>
          {isFollow ? (
            <>
              <i className="ion-minus-round"></i>
              &nbsp; Отписатся от {author}
            </>
          ) : (
            <>
              <i className="ion-plus-round"></i>
              &nbsp; Подписатся на {author}
            </>
          )}
        </button>
      </span>
    </>
  );
};
const mapStateToProps = state => ({
  isFollow: getUserIsFollow(state)
});

const mapDispatchToProps = {
  fetchLikeFeedRequest,
  setAuthorToFollowRequest
};
export const BarSocialActivity = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
