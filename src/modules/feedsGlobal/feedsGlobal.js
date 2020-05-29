import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import { feedMapListLike } from "helpers/feedMapListLike";
import {
  fetchFeedsGlobalRequest,
  fetchFeedsGlobalSuccess,
  fetchFeedsGlobalError,
  fetchFeedsGlobalCountRequest,
  fetchFeedsGlobalCountSuccess,
  fetchFeedsGlobalCountError,
  fetchLikeFeedSuccess,
  fetchLikeFeedError,
} from "./actions";

const feedsList = handleActions(
  {
    [fetchFeedsGlobalRequest]: () => [],
    [fetchFeedsGlobalSuccess]: (_, { payload }) => payload.data.articles,
    [fetchFeedsGlobalError]: () => [],
    [fetchLikeFeedSuccess]: (state, { payload }) =>
      feedMapListLike(state, payload),
  },
  []
);

const feedsCount = handleActions(
  {
    [fetchFeedsGlobalCountRequest]: () => 0,
    [fetchFeedsGlobalCountSuccess]: (_, { payload }) =>
      payload.data.articlesCount,
    [fetchFeedsGlobalCountError]: () => 0,
  },
  0
);

const loading = handleActions(
  {
    [fetchFeedsGlobalRequest]: () => true,
    [fetchFeedsGlobalSuccess]: () => false,
    [fetchFeedsGlobalError]: () => false,
  },
  false
);

const error = handleActions(
  {
    [fetchFeedsGlobalRequest]: () => "",
    [fetchFeedsGlobalSuccess]: () => "",
    [fetchFeedsGlobalError]: (_, { payload }) => payload,
    [fetchFeedsGlobalCountRequest]: () => "",
    [fetchFeedsGlobalCountSuccess]: () => "",
    [fetchFeedsGlobalCountError]: (_, { payload }) => payload,
    [fetchLikeFeedError]: (_, { payload }) => payload,
  },
  ""
);

export default combineReducers({
  feedsList,
  feedsCount,
  loading,
  error,
});
