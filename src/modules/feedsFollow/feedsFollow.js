import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import {
  fetchFeedsFollowRequest,
  fetchFeedsFollowSuccess,
  fetchFeedsFollowError
} from "./actions";

const feedsList = handleActions(
  {
    [fetchFeedsFollowRequest]: () => [],
    [fetchFeedsFollowSuccess]: (_state, { payload }) =>
      payload.data.articles.map(
        ({
          title,
          slug,
          createdAt,
          tagList,
          description,
          favorited,
          favoritesCount,
          author: { username, image }
        }) => ({
          title,
          slug,
          createdAt,
          tagList,
          description,
          favorited,
          favoritesCount,
          author: {
            username,
            image
          }
        })
      ),
    [fetchFeedsFollowError]: () => []
  },
  []
);

const feedsCount = handleActions(
  {
    [fetchFeedsFollowRequest]: () => 0,
    [fetchFeedsFollowSuccess]: (_state, { payload }) =>
      payload.data.articlesCount,
    [fetchFeedsFollowError]: () => 0
  },
  0
);

const loading = handleActions(
  {
    [fetchFeedsFollowRequest]: () => true,
    [fetchFeedsFollowSuccess]: () => false,
    [fetchFeedsFollowError]: () => false
  },
  false
);

const error = handleActions(
  {
    [fetchFeedsFollowRequest]: () => null,
    [fetchFeedsFollowSuccess]: () => null,
    [fetchFeedsFollowError]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  feedsList,
  feedsCount,
  loading,
  error
});
