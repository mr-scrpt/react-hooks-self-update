import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import {
  createFeedEditorRequest,
  createFeedEditorSuccess,
  createFeedEditorError,
  createFeedEditorErrorValidation,
  fetchFeedEditorRequest,
  fetchFeedEditorSuccess,
  fetchFeedEditorError,
  deleteFeedEditorRequest,
  deleteFeedEditorSuccess,
  deleteFeedEditorError,
  putFeedEditorRequest,
  putFeedEditorSuccess,
  putFeedEditorError,
  fetchLikeFeedSuccess,
  fetchLikeFeedError,
  clearFeed,
  resetBeCreated,
  resetBeEdited,
  resetBeDeleted,
  resetError,
  setAuthorToFollowSuccess,
  setAuthorToFollowError
} from "./actions";

const feed = handleActions(
  {
    [createFeedEditorRequest]: () => ({}),
    [createFeedEditorSuccess]: (_, { payload }) => payload.data.article,
    [createFeedEditorError]: () => ({}),

    [fetchFeedEditorRequest]: () => ({}),
    [fetchFeedEditorSuccess]: (_, { payload }) => payload.data.article,
    [fetchFeedEditorError]: () => ({}),

    [deleteFeedEditorRequest]: () => ({}),
    [deleteFeedEditorSuccess]: () => ({}),
    [deleteFeedEditorError]: () => ({}),

    [putFeedEditorRequest]: () => ({}),
    [putFeedEditorSuccess]: (_, { payload }) => payload.data.article,
    [putFeedEditorError]: () => ({}),

    [fetchLikeFeedSuccess]: state => ({
      ...state,
      favorited: !state.favorited,
      favoritesCount: state.favorited
        ? state.favoritesCount - 1
        : state.favoritesCount + 1
    }),

    [setAuthorToFollowSuccess]: state => ({
      ...state,
      author: { ...state.author, following: !state.author.following }
    }),
    [clearFeed]: () => ({})
  },
  {}
);

const loading = handleActions(
  {
    [createFeedEditorRequest]: () => true,
    [createFeedEditorSuccess]: () => false,
    [createFeedEditorError]: () => false,
    [fetchFeedEditorRequest]: () => true,
    [fetchFeedEditorSuccess]: () => false,
    [fetchFeedEditorError]: () => false,
    [deleteFeedEditorRequest]: () => true,
    [deleteFeedEditorSuccess]: () => false,
    [deleteFeedEditorError]: () => false
  },
  false
);

const error = handleActions(
  {
    [createFeedEditorRequest]: () => "",
    [createFeedEditorSuccess]: () => "",
    [createFeedEditorError]: (_, { payload }) => payload,
    [putFeedEditorError]: (_, { payload }) => payload,
    [fetchFeedEditorRequest]: () => "",
    [fetchFeedEditorSuccess]: () => "",
    [fetchFeedEditorError]: (_, { payload }) => payload,
    [deleteFeedEditorRequest]: () => "",
    [deleteFeedEditorSuccess]: () => "",
    [deleteFeedEditorError]: (_, { payload }) => payload,
    [fetchLikeFeedError]: (_, { payload }) => payload,
    [setAuthorToFollowError]: (_, { payload }) => payload,
    [resetError]: () => ""
  },
  ""
);

const errorValidation = handleActions(
  {
    [createFeedEditorRequest]: () => ({}),
    [createFeedEditorSuccess]: () => ({}),
    [createFeedEditorErrorValidation]: (_, { payload }) => payload,
    [resetError]: () => ({})
  },
  {}
);
const beCreated = handleActions(
  {
    [createFeedEditorRequest]: () => false,
    [createFeedEditorSuccess]: () => true,
    [createFeedEditorError]: () => false,
    [resetBeCreated]: () => false
    //[fetchFeedEditorRequest]: () => true,
    //[fetchFeedEditorSuccess]: () => true
    //[fetchFeedEditorError]: () => true,
    //[deleteFeedEditorRequest]: () => ({}),
    //[deleteFeedEditorSuccess]: () => true
    //[deleteFeedEditorError]: (_, { payload }) => payload
  },
  false
);

const beEdited = handleActions(
  {
    [putFeedEditorRequest]: () => false,
    [putFeedEditorSuccess]: () => true,
    [putFeedEditorError]: () => false,
    [resetBeEdited]: () => false
    //[fetchFeedEditorRequest]: () => true,
    //[fetchFeedEditorSuccess]: () => true
    //[fetchFeedEditorError]: () => true,
    //[deleteFeedEditorRequest]: () => ({}),
    //[deleteFeedEditorSuccess]: () => true
    //[deleteFeedEditorError]: (_, { payload }) => payload
  },
  false
);
const beDeleted = handleActions(
  {
    //[createFeedEditorRequest]: () => false,
    //[createFeedEditorSuccess]: () => true
    //[createFeedEditorError]: () => false,
    //[fetchFeedEditorRequest]: () => true,
    //[fetchFeedEditorSuccess]: () => true
    //[fetchFeedEditorError]: () => true,
    //[deleteFeedEditorRequest]: () => ({}),
    [deleteFeedEditorSuccess]: () => true,
    [resetBeDeleted]: () => false
    //[deleteFeedEditorError]: (_, { payload }) => payload
  },
  false
);

export default combineReducers({
  feed,
  loading,
  error,
  errorValidation,
  beCreated,
  beEdited,
  beDeleted
});
