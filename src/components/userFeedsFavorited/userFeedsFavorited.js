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
  fetchLikeFeedRequest
} from "modules/userProfile";

import { limit } from "constant";
import { isEmptyObject } from "helpers/isEmptyObject";
import { getPaginators } from "helpers/getPaginators";

import { Feeds } from "components/feeds";
import { ShowErrors } from "components/showErrors";
import { ShowLoading } from "components/showLoading";
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
  location: { search }
}) => {
  console.log(feeds);
  console.log(feedsCount);

  const { currentPage, offset } = getPaginators(search);

  useEffect(() => {
    if (isEmptyObject(user)) return;

    fetchUserFeedsFavoritedRequest({
      author: user.username,
      limit,
      offset
    });
    return () => {
      resetUserFeedsFavoritedStore();
    };
  }, [fetchUserFeedsFavoritedRequest, user, url, search]);

  return (
    <div>
      <ShowLoading loading={feedsLoading} />
      <ShowErrors errors={feedsError} />
      {!feedsLoading && isEmptyObject(feedsError) && (
        <>
          <Feeds articles={feeds} dispatchToLikeToggle={fetchLikeFeedRequest} />
          <Pagination
            total={feedsCount}
            limit={limit}
            url={url}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  user: getUser(state),
  feeds: getUserFeedsFavorited(state),
  feedsCount: getUserFeedsFavoritedCount(state),
  feedsLoading: getUserFeedsFavoritedIsLoading(state),
  feedsError: getUserFeedsFavoritedIsError(state)
});

const mapDispatchToProps = {
  fetchUserFeedsFavoritedRequest,
  resetUserFeedsFavoritedStore,
  fetchLikeFeedRequest
};

export const UserFeedsFavorited = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
