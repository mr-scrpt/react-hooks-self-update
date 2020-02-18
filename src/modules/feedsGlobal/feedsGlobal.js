import { handleActions } from "redux-actions";
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

import { fetchFeedsGlobalRequest, fetchFeedsGlobalSuccess, fetchFeedsGlobalError } from './actions';

const feedsList = handleActions({
  [fetchFeedsGlobalRequest]: () => [],
  [fetchFeedsGlobalSuccess]: (_state, action) => action.payload,
  [fetchFeedsGlobalError]: () => []
}, [])

const loading = handleActions({
  [fetchFeedsGlobalRequest]: () => true,
  [fetchFeedsGlobalSuccess]: () => false,
  [fetchFeedsGlobalError]: () => false
}, false)

const error = handleActions({
  [fetchFeedsGlobalRequest]: () => null,
  [fetchFeedsGlobalSuccess]: () => null,
  [fetchFeedsGlobalError]: (_state, action) => action.payload
}, null)

export default combineReducers({
  feedsList,
  loading,
  error
})

/* export const getFeeds = createSelector(
  state => state.feeds.data
)  */