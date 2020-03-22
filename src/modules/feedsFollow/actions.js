import { createAction } from "redux-actions";

export const fetchFeedsFollowRequest = createAction(
  "FEEDS_FOLLOW/FETCH_FEEDS_REQUEST"
);

export const fetchFeedsFollowSuccess = createAction(
  "FEEDS_FOLLOW/FETCH_FEEDS_SUCCESS"
);

export const fetchFeedsFollowError = createAction("FEEDS_FOLLOW/FETCH_ERROR");

// LIKE FEED
export const fetchLikeFeedRequest = createAction(
  "FEEDS_FOLLOW/FETCH_LIKE_FEED_REQUEST"
);
export const fetchLikeFeedSuccess = createAction(
  "FEEDS_FOLLOW/FETCH_LIKE_FEED_SUCCESS"
);
export const fetchLikeFeedError = createAction(
  "FEEDS_FOLLOW/FETCH_LIKE_FEED_ERROR"
);
