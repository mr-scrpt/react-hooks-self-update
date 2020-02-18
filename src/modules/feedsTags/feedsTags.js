import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { fetchFeedsTagsRequest, fetchFeedsTagsSuccess, fetchFeedsTagsError } from './actions';

const feedsList = handleActions({
  [fetchFeedsTagsRequest]: () => [],
  [fetchFeedsTagsSuccess]: (_, action) => action.payload,
  [fetchFeedsTagsError]: () => []
}, [])


const loading = handleActions({
  [fetchFeedsTagsRequest]: () => true,
  [fetchFeedsTagsSuccess]: () => false,
  [fetchFeedsTagsError]: () => []
}, false)

const error = handleActions({
  [fetchFeedsTagsRequest]: () => null,
  [fetchFeedsTagsSuccess]: () => null,
  [fetchFeedsTagsError]: () => []
}, null)

export default combineReducers({
  feedsList, loading, error
})