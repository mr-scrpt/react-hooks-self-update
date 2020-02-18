import { createAction } from 'redux-actions';

export const fetchFeedsSelfRequest = createAction('FEEDS_SELF/FETCH_REQUEST');

export const fetchFeedsSelfSuccess = createAction('FEEDS_SELF/FETCH_SUCCESS');

export const fetchFeedsSelfError = createAction('FEEDS_SELF/FETCH_ERROR');