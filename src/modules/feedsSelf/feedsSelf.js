import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { fetchFeedsSelfRequest, fetchFeedsSelfSuccess, fetchFeedsSelfError } from './actions';

const feedsList = handleActions({
  [fetchFeedsSelfRequest]: () => [],
  [fetchFeedsSelfSuccess]: (_state, action) => action.payload,
  [fetchFeedsSelfError]: () => []
}, [])

const loading = handleActions({
  [fetchFeedsSelfRequest]: () => true,
  [fetchFeedsSelfSuccess]: () => false,
  [fetchFeedsSelfError]: () => false
}, false)

const error = handleActions({
  [fetchFeedsSelfRequest]: () => null,
  [fetchFeedsSelfSuccess]: () => null,
  [fetchFeedsSelfError]: (_state, action) => action.payload
}, null)

export default combineReducers({
  feedsList,
  loading,
  error
})