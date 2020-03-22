import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import {
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileError,
  resetProfileStore,
  fetchUserFeedsRequest,
  fetchUserFeedsSuccess,
  fetchUserFeedsError,
  resetUserFeedsStore,
  fetchUserFeedsFavoritedRequest,
  fetchUserFeedsFavoritedSuccess,
  fetchUserFeedsFavoritedError,
  resetUserFeedsFavoritedStore
} from "./actions";

// USER
const user = handleActions(
  {
    [fetchProfileRequest]: () => ({}),
    [fetchProfileSuccess]: (_, { payload }) => payload.data.profile,
    [fetchProfileError]: () => ({}),

    [resetProfileStore]: () => ({})
  },
  {}
);

const userLoading = handleActions(
  {
    [fetchProfileRequest]: () => true,
    [fetchProfileSuccess]: () => false,
    [fetchProfileError]: () => false
  },
  false
);

const userError = handleActions(
  {
    [fetchProfileRequest]: () => ({}),
    [fetchProfileSuccess]: () => ({}),
    [fetchProfileError]: () => (_, { payload }) => payload
  },
  {}
);

// USER FEEDS
const userFeeds = handleActions(
  {
    [fetchUserFeedsRequest]: () => [],
    [fetchUserFeedsSuccess]: (_, { payload }) => payload.data.articles,
    [fetchUserFeedsError]: () => [],
    [resetUserFeedsStore]: () => []
  },
  []
);

const userFeedsCount = handleActions(
  {
    [fetchUserFeedsRequest]: () => null,
    [fetchUserFeedsSuccess]: (_, { payload }) => payload.data.articlesCount,
    [fetchUserFeedsError]: () => null,
    [resetUserFeedsStore]: () => null
  },
  null
);

const userFeedsLoading = handleActions(
  {
    [fetchUserFeedsRequest]: () => true,
    [fetchUserFeedsSuccess]: () => false,
    [fetchUserFeedsError]: () => false
  },
  false
);

const userFeedsError = handleActions(
  {
    [fetchUserFeedsRequest]: () => ({}),
    [fetchUserFeedsSuccess]: () => ({}),
    [fetchUserFeedsError]: () => (_, { payload }) => payload
  },
  {}
);

// USER FEEDS FAVORITED
const userFeedsFavorited = handleActions(
  {
    [fetchUserFeedsFavoritedRequest]: () => [],
    [fetchUserFeedsFavoritedSuccess]: (_, { payload }) => payload.data.articles,
    [fetchUserFeedsFavoritedError]: () => [],
    [resetUserFeedsFavoritedStore]: () => []
  },
  []
);

const userFeedsFavoritedCount = handleActions(
  {
    [fetchUserFeedsFavoritedRequest]: () => null,
    [fetchUserFeedsFavoritedSuccess]: (_, { payload }) =>
      payload.data.articlesCount,
    [fetchUserFeedsFavoritedError]: () => null,
    [resetUserFeedsFavoritedStore]: () => null
  },
  null
);
const userFeedsFavoritedLoading = handleActions(
  {
    [fetchUserFeedsFavoritedRequest]: () => true,
    [fetchUserFeedsFavoritedSuccess]: () => false,
    [fetchUserFeedsFavoritedError]: () => false
  },
  false
);

const userFeedsFavoritedError = handleActions(
  {
    [fetchUserFeedsFavoritedRequest]: () => ({}),
    [fetchUserFeedsFavoritedSuccess]: () => ({}),
    [fetchUserFeedsFavoritedError]: () => (_, { payload }) => payload
  },
  {}
);

export default combineReducers({
  user,
  userLoading,
  userError,
  userFeeds,
  userFeedsCount,
  userFeedsLoading,
  userFeedsError,
  userFeedsFavorited,
  userFeedsFavoritedCount,
  userFeedsFavoritedLoading,
  userFeedsFavoritedError
});
