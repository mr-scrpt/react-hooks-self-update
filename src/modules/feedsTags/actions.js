import { createAction } from "redux-actions";

export const fetchFeedsTagsRequest = createAction("FEEDS_TAGS/FETCH_REQUEST");
export const fetchFeedsTagsSuccess = createAction("FEEDS_TAGS/FETCH_SUCCESS");
export const fetchFeedsTagsError = createAction("FEEDS_TAGS/FETCH_ERROR");

// LIKE FEED
export const fetchLikeFeedRequest = createAction(
  "FEEDS_TAGS/FETCH_LIKE_FEED_REQUEST"
);
export const fetchLikeFeedSuccess = createAction(
  "FEEDS_TAGS/FETCH_LIKE_FEED_SUCCESS"
);
export const fetchLikeFeedError = createAction(
  "FEEDS_TAGS/FETCH_LIKE_FEED_ERROR"
);
