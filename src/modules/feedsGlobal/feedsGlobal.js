import { handleActions } from "redux-actions";
import { combineReducers } from 'redux';

import { fetchFeedsGlobalRequest, fetchFeedsGlobalSuccess, fetchFeedsGlobalError } from './actions';

const feedsList = handleActions({
  [fetchFeedsGlobalRequest]: () => [],
  [fetchFeedsGlobalSuccess]: (_state, { payload }) => payload.data.articles.map(({
    title,
    slug,
    createdAt,
    tagList,
    description,
    favorited,
    favoritesCount,
    author: {
      username, image
    }
  }) => ({
    title,
    slug,
    createdAt,
    tagList,
    description,
    favorited,
    favoritesCount,
    author: {
      username, image
    }
  })),
  [fetchFeedsGlobalError]: () => []
}, [])

const feedsCount = handleActions({
  [fetchFeedsGlobalRequest]: () => 0,
  [fetchFeedsGlobalSuccess]: (_state, { payload }) => payload.data.articlesCount,
  [fetchFeedsGlobalError]: () => 0
}, 0)

const loading = handleActions({
  [fetchFeedsGlobalRequest]: () => true,
  [fetchFeedsGlobalSuccess]: () => false,
  [fetchFeedsGlobalError]: () => false
}, false)

const error = handleActions({
  [fetchFeedsGlobalRequest]: () => { },
  [fetchFeedsGlobalSuccess]: () => { },
  [fetchFeedsGlobalError]: (_state, action) => action.payload
}, {})

export default combineReducers({
  feedsList,
  feedsCount,
  loading,
  error
})