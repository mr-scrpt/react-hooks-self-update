import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import {
  fetchFeedsTagsRequest,
  fetchFeedsTagsSuccess,
  fetchFeedsTagsError
} from "./actions";

const feedsList = handleActions(
  {
    [fetchFeedsTagsRequest]: () => [],
    [fetchFeedsTagsSuccess]: (_state, { payload }) =>
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
    [fetchFeedsTagsError]: () => []
  },
  []
);
const feedsCount = handleActions(
  {
    [fetchFeedsTagsRequest]: () => 0,
    [fetchFeedsTagsSuccess]: (_state, { payload }) =>
      payload.data.articlesCount,
    [fetchFeedsTagsError]: () => 0
  },
  0
);
const loading = handleActions(
  {
    [fetchFeedsTagsRequest]: () => true,
    [fetchFeedsTagsSuccess]: () => false,
    [fetchFeedsTagsError]: () => []
  },
  false
);

const error = handleActions(
  {
    [fetchFeedsTagsRequest]: () => ({}),
    [fetchFeedsTagsSuccess]: () => ({}),
    [fetchFeedsTagsError]: () => []
  },
  {}
);

export default combineReducers({
  feedsList,
  feedsCount,
  loading,
  error
});
