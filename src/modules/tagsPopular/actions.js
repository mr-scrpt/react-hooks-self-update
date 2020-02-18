import { createAction } from 'redux-actions';

export const fetchTagsPopularRequest = createAction('TAGS_POP/FETCH_REQUEST');
export const fetchTagsPopularSuccess = createAction('TAGS_POP/FETCH_SUCCESS');
export const fetchTagsPopularError = createAction('TAGS_POP/FETCH_ERROR');