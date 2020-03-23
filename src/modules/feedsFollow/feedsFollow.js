import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import { feedMapListLike } from "helpers/feedMapListLike";

import {
  fetchFeedsFollowRequest,
  fetchFeedsFollowSuccess,
  fetchFeedsFollowError,
  fetchLikeFeedSuccess,
  fetchLikeFeedError
} from "./actions";

const feedsList = handleActions(
  {
    [fetchFeedsFollowRequest]: () => [],
    [fetchFeedsFollowSuccess]: (_state, { payload }) => payload.data.articles,
    [fetchFeedsFollowError]: () => [],
    [fetchLikeFeedSuccess]: (state, { payload }) =>
      feedMapListLike(state, payload)
  },
  []
);

const feedsCount = handleActions(
  {
    [fetchFeedsFollowRequest]: () => 0,
    [fetchFeedsFollowSuccess]: (_, { payload }) => payload.data.articlesCount,
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
    [fetchFeedsFollowRequest]: () => ({}),
    [fetchFeedsFollowSuccess]: () => ({}),
    [fetchFeedsFollowError]: (_, action) => action.payload,
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
