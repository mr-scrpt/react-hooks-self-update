import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import { feedMapListLike } from "helpers/feedMapListLike";
import {
  fetchFeedsGlobalRequest,
  fetchFeedsGlobalSuccess,
  fetchFeedsGlobalError,
  fetchLikeFeedSuccess,
  fetchLikeFeedError
} from "./actions";

const feedsList = handleActions(
  {
    [fetchFeedsGlobalRequest]: () => [],
    [fetchFeedsGlobalSuccess]: (_, { payload }) => payload.data.articles,
    [fetchFeedsGlobalError]: () => [],
    [fetchLikeFeedSuccess]: (state, { payload }) =>
      feedMapListLike(state, payload)
  },
  []
);

const feedsCount = handleActions(
  {
    [fetchFeedsGlobalRequest]: () => 0,
    [fetchFeedsGlobalSuccess]: (_, { payload }) => payload.data.articlesCount,
    [fetchFeedsGlobalError]: () => 0
  },
  0
);

const loading = handleActions(
  {
    [fetchFeedsGlobalRequest]: () => true,
    [fetchFeedsGlobalSuccess]: () => false,
    [fetchFeedsGlobalError]: () => false
  },
  false
);

const error = handleActions(
  {
    [fetchFeedsGlobalRequest]: () => "",
    [fetchFeedsGlobalSuccess]: () => "",
    [fetchFeedsGlobalError]: (_, { payload }) => payload,
    [fetchLikeFeedError]: (_, { payload }) => payload
  },
  ""
);

export default combineReducers({
  feedsList,
  feedsCount,
  loading,
  error
});
