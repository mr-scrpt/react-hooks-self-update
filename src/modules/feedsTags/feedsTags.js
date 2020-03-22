import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import { feedMapList } from "helpers/feedMapList";
import { feedMapListLike } from "helpers/feedMapListLike";

import {
  fetchFeedsTagsRequest,
  fetchFeedsTagsSuccess,
  fetchFeedsTagsError,
  fetchLikeFeedSuccess,
  fetchLikeFeedError
} from "./actions";

const feedsList = handleActions(
  {
    [fetchFeedsTagsRequest]: () => [],
    [fetchFeedsTagsSuccess]: (_, { payload }) => feedMapList(payload),
    [fetchFeedsTagsError]: () => [],
    [fetchLikeFeedSuccess]: (state, { payload }) =>
      feedMapListLike(state, payload)
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
    [fetchFeedsTagsError]: () => [],
    [fetchLikeFeedError]: (_, action) => action.payload
  },
  {}
);

export default combineReducers({
  feedsList,
  feedsCount,
  loading,
  error
});
