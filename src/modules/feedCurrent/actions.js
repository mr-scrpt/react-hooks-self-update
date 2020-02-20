import { createAction } from 'redux-actions';

// FETHC
export const fetchFeedCurrentRequest = createAction('FEEDS_CURRENT/FETCH_REQUEST');

export const fetchFeedCurrentSuccess = createAction('FEEDS_CURRENT/FETCH_SUCCESS');

export const fetchFeedCurrentError = createAction('FEEDS_CURRENT/FETCH_ERROR');

// DELETE
export const deleteFeedCurrentRequest = createAction('FEEDS_CURRENT/DELETE_REQUEST');

export const deleteFeedCurrentSuccess = createAction('FEEDS_CURRENT/DELETE_SUCCESS');

export const deleteFeedCurrentError = createAction('FEEDS_CURRENT/DELETE_ERROR');