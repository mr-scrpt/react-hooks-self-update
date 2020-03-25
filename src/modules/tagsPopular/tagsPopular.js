import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import {
  fetchTagsPopularRequest,
  fetchTagsPopularSuccess,
  fetchTagsPopularError,
  setFeedsTagsActive,
  resetFeedsTagsActive
} from "./actions";

const tagsList = handleActions(
  {
    [fetchTagsPopularRequest]: () => [],
    [fetchTagsPopularSuccess]: (_state, { payload }) => payload.data.tags,
    [fetchTagsPopularError]: () => []
  },
  []
);
const activeTag = handleActions(
  {
    [setFeedsTagsActive]: (_, { payload }) => payload,
    [resetFeedsTagsActive]: () => ""
  },
  ""
);
const loading = handleActions(
  {
    [fetchTagsPopularRequest]: () => true,
    [fetchTagsPopularSuccess]: () => false,
    [fetchTagsPopularError]: () => false
  },
  false
);

const error = handleActions(
  {
    [fetchTagsPopularRequest]: () => "",
    [fetchTagsPopularSuccess]: () => "",
    [fetchTagsPopularError]: (_state, { payload }) => payload
  },
  ""
);

export default combineReducers({
  tagsList,
  activeTag,
  loading,
  error
});
