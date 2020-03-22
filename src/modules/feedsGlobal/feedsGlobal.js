import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import { feedMapList } from "helpers/feedMapList";
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
    [fetchFeedsGlobalSuccess]: (_, { payload }) => feedMapList(payload),
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
    [fetchFeedsGlobalRequest]: () => ({}),
    [fetchFeedsGlobalSuccess]: () => ({}),
    [fetchFeedsGlobalError]: (_, action) => action.payload,
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
