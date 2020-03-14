import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import {
  createFeedEditorRequest,
  createFeedEditorSuccess,
  createFeedEditorError,
  fetchFeedEditorRequest,
  fetchFeedEditorSuccess,
  fetchFeedEditorError,
  deleteFeedEditorRequest,
  deleteFeedEditorSuccess,
  deleteFeedEditorError,
  putFeedEditorRequest,
  putFeedEditorSuccess,
  putFeedEditorError,
  clearFeed,
  resetBeCreated,
  resetBeEdited,
  resetBeDeleted,
  resetError
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
    [createFeedEditorRequest]: () => ({}),
    [createFeedEditorSuccess]: () => ({}),
    [createFeedEditorError]: (_, { payload }) => payload,
    [fetchFeedEditorRequest]: () => ({}),
    [fetchFeedEditorSuccess]: () => ({}),
    [fetchFeedEditorError]: (_, { payload }) => payload,
    [deleteFeedEditorRequest]: () => ({}),
    [deleteFeedEditorSuccess]: () => ({}),
    [deleteFeedEditorError]: (_, { payload }) => payload,
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
  beCreated,
  beEdited,
  beDeleted
});
