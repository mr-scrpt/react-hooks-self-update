import { createAction } from 'redux-actions';

export const fetchFeedsRequest = createAction('FEEDS/FETCH_REQUEST');

export const fetchFeedsSuccess = createAction('FEEDS/FETCH_SUCCESS');

export const fetchFeedsError = createAction('FEEDS/FETCH_ERROR');