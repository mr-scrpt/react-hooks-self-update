import { createAction } from "redux-actions";

// CREATE
export const createFeedEditorRequest = createAction(
  "FEED_EDITOR/CREATE_FEED_REQUEST"
);

export const createFeedEditorSuccess = createAction(
  "FEED_EDITOR/CREATE_FEED_SUCCESS"
);

export const createFeedEditorError = createAction(
  "FEED_EDITOR/CREATE_FEED_ERROR"
);

// FETHC
export const fetchFeedEditorRequest = createAction(
  "FEED_EDITOR/FETCH_FEED_REQUEST"
);

export const fetchFeedEditorSuccess = createAction(
  "FEED_EDITOR/FETCH_FEED_SUCCESS"
);

export const fetchFeedEditorError = createAction(
  "FEED_EDITOR/FETCH_FEED_ERROR"
);

// DELETE
export const deleteFeedEditorRequest = createAction(
  "FEED_EDITOR/DELETE_FEED_REQUEST"
);

export const deleteFeedEditorSuccess = createAction(
  "FEEDS_EDITOR/DELETE_FEED_SUCCESS"
);

export const deleteFeedEditorError = createAction(
  "FEEDS_EDITOR/DELETE_FEED_ERROR"
);

// PUT
export const putFeedEditorRequest = createAction(
  "FEEDS_EDITOR/PUT_FEED_REQUEST"
);

export const putFeedEditorSuccess = createAction(
  "FEEDS_EDITOR/PUT_FEED_SUCCESS"
);

export const putFeedEditorError = createAction("FEEDS_EDITOR/PUT_FEED_ERROR");

// LIKE FEED
export const fetchLikeFeedRequest = createAction(
  "FEEDS_EDITOR/FETCH_LIKE_FEED_REQUEST"
);
export const fetchLikeFeedSuccess = createAction(
  "FEEDS_EDITOR/FETCH_LIKE_FEED_SUCCESS"
);
export const fetchLikeFeedError = createAction(
  "FEEDS_EDITOR/FETCH_LIKE_FEED_ERROR"
);

// SET USER TO FOLLOW

export const setAuthorToFollowRequest = createAction(
  "FEEDS_EDITOR/SET_AUTHOR_TO_FOLLOW_REQUEST"
);
export const setAuthorToFollowSuccess = createAction(
  "FEEDS_EDITOR/SET_AUTHOR_TO_FOLLOW_SUCCESS"
);
export const setAuthorToFollowError = createAction(
  "FEEDS_EDITOR/SET_AUTHOR_TO_FOLLOW_ERROR"
);

// OTHER

export const clearFeed = createAction("FEED_EDITOR/CLEAR_FEED");
export const resetBeCreated = createAction("FEED_EDITOR/RESET_FEED_BE_CEATED");
export const resetBeEdited = createAction("FEED_EDITOR/RESET_FEED_BE_EDITED");
export const resetBeDeleted = createAction("FEED_EDITOR/RESET_FEED_BE_DELETED");
export const resetError = createAction("FEED_EDITOR/RESET_ERROR");
