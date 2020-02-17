import { handleActions } from "redux-actions";
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';


import { fetchFeedsRequest, fetchFeedsSuccess, fetchFeedsError } from './actions';

const feeds = handleActions({
  [fetchFeedsRequest]: () => null,
  [fetchFeedsSuccess]: (_state, action) => action.payload,
  [fetchFeedsError]: (_state, action) => action.payload
}, null)

const loading = handleActions({
  [fetchFeedsRequest]: () => true,
  [fetchFeedsSuccess]: () => false,
  [fetchFeedsError]: () => false
}, false)

const error = handleActions({
  [fetchFeedsRequest]: () => null,
  [fetchFeedsSuccess]: () => null,
  [fetchFeedsError]: (_state, action) => (action.payload)
}, null)

export default combineReducers({
  feeds,
  loading,

  error
})

/* export const getFeeds = createSelector(
  state => state.feeds.data
)  */