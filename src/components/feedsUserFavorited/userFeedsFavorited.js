import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchUserFeedsFavoritedRequest,
  getUser,
  getUserFeedsFavorited,
  getUserFeedsFavoritedIsLoading,
  getUserFeedsFavoritedIsError,
  getUserFeedsFavoritedCount,
  resetUserFeedsFavoritedStore,
  fetchLikeFeedRequest,
} from "modules/userProfile";

import { limit } from "constant";
import { isEmptyObject } from "helpers/isEmptyObject";
import { getPaginators } from "helpers/getPaginators";

import { FeedsList } from "@cm/feedsSerp";

import { Pagination } from "components/pagination";

const Component = ({
  user,
  fetchUserFeedsFavoritedRequest,
  resetUserFeedsFavoritedStore,
  feeds,
  feedsLoading,
  feedsError,
  feedsCount,
  fetchLikeFeedRequest,
  match: { url },
  location: { search },
}) => {
  const { currentPage, offset } = getPaginators(search);

  useEffect(() => {
    if (isEmptyObject(user)) return;

    fetchUserFeedsFavoritedRequest({
      author: user.username,
      limit,
      offset,
    });
    return () => {
      resetUserFeedsFavoritedStore();
    };
  }, [fetchUserFeedsFavoritedRequest, user, url, search]);

  return (
    <div>
      <FeedsList
        feeds={feeds}
        isLoading={feedsLoading}
        isError={feedsError}
        dispatchToLikeToggle={fetchLikeFeedRequest}
        count={feedsCount}
        limit={limit}
        currentPage={currentPage}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: getUser(state),
  feeds: getUserFeedsFavorited(state),
  feedsCount: getUserFeedsFavoritedCount(state),
  feedsLoading: getUserFeedsFavoritedIsLoading(state),
  feedsError: getUserFeedsFavoritedIsError(state),
});

const mapDispatchToProps = {
  fetchUserFeedsFavoritedRequest,
  resetUserFeedsFavoritedStore,
  fetchLikeFeedRequest,
};

export const FeedsUserFavorited = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
