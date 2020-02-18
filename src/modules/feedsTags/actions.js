import { createAction } from 'redux-actions';

export const fetchFeedsTagsRequest = createAction('FEEDS_TAGS/FETCH_REQUEST');
export const fetchFeedsTagsSuccess = createAction('FEEDS_TAGS/FETCH_SUCCESS');
export const fetchFeedsTagsError = createAction('FEEDS_TAGS/FETCH_ERROR');