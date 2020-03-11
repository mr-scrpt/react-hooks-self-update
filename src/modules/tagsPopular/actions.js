import { createAction } from "redux-actions";

export const fetchTagsPopularRequest = createAction("TAGS_POP/FETCH_REQUEST");
export const fetchTagsPopularSuccess = createAction("TAGS_POP/FETCH_SUCCESS");
export const fetchTagsPopularError = createAction("TAGS_POP/FETCH_ERROR");

export const setFeedsTagsActive = createAction("FEEDS_TAGS/SET_ACTIVE");
export const resetFeedsTagsActive = createAction("FEEDS_TAGS/RESET_ACTIVE");
