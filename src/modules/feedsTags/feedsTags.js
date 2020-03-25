import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import { feedMapListLike } from "helpers/feedMapListLike";

import {
  fetchFeedsTagsRequest,
  fetchFeedsTagsSuccess,
  fetchFeedsTagsError,
  fetchLikeFeedSuccess,
  fetchLikeFeedError,
  resetFeedsTags
} from "./actions";

const feedsList = handleActions(
  {
    [fetchFeedsTagsRequest]: () => [],
    [fetchFeedsTagsSuccess]: (_, { payload }) => payload.data.articles,
    [fetchFeedsTagsError]: () => [],
    [fetchLikeFeedSuccess]: (state, { payload }) =>
      feedMapListLike(state, payload),
    [resetFeedsTags]: () => []
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
    [fetchFeedsTagsError]: () => false
  },
  false
);

const error = handleActions(
  {
    [fetchFeedsTagsRequest]: () => "",
    [fetchFeedsTagsSuccess]: () => "",
    [fetchFeedsTagsError]: (_, { payload }) => payload,
    [fetchLikeFeedError]: (_, { payload }) => payload
  },
  {}
);

export default combineReducers({
  feedsList,
  feedsCount,
  loading,
  error
});
