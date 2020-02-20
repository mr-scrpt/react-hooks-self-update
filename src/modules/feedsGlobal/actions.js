import { createAction } from 'redux-actions';

export const fetchFeedsGlobalRequest = createAction('FEEDS_GLOBAL/FETCH_REQUEST');

export const fetchFeedsGlobalSuccess = createAction('FEEDS_GLOBAL/FETCH_SUCCESS');

export const fetchFeedsGlobalError = createAction('FEEDS_GLOBAL/FETCH_ERROR');
