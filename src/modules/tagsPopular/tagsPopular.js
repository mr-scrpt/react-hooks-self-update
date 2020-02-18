import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { fetchTagsPopularRequest, fetchTagsPopularSuccess, fetchTagsPopularError } from './actions';


const tagsList = handleActions({
  [fetchTagsPopularRequest]: () => [],
  [fetchTagsPopularSuccess]: (_state, action) => action.payload,
  [fetchTagsPopularError]: () => []
}, [])

const loading = handleActions({
  [fetchTagsPopularRequest]: () => true,
  [fetchTagsPopularSuccess]: () => false,
  [fetchTagsPopularError]: () => false
}, false)

const error = handleActions({
  [fetchTagsPopularRequest]: () => null,
  [fetchTagsPopularSuccess]: () => null,
  [fetchTagsPopularError]: (_state, action) => (action.payload)
}, null)

export default combineReducers({
  tagsList, loading, error
})