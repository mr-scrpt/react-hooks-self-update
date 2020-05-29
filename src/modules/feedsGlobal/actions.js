import { createAction } from "redux-actions";

export const fetchFeedsGlobalRequest = createAction(
  "FEEDS_GLOBAL/FETCH_REQUEST"
);

export const fetchFeedsGlobalSuccess = createAction(
  "FEEDS_GLOBAL/FETCH_SUCCESS"
);

export const fetchFeedsGlobalError = createAction("FEEDS_GLOBAL/FETCH_ERROR");

/* Count for Pagination */

export const fetchFeedsGlobalCountRequest = createAction(
  "FEEDS_GLOBAL/FETCH_COUNT_REQUEST"
);

export const fetchFeedsGlobalCountSuccess = createAction(
  "FEEDS_GLOBAL/FETCH_COUNT_SUCCESS"
);

export const fetchFeedsGlobalCountError = createAction(
  "FEEDS_GLOBAL/FETCH_COUNT_ERROR"
);

// LIKE FEED
export const fetchLikeFeedRequest = createAction(
  "FEEDS_GLOBAL/FETCH_LIKE_FEED_REQUEST"
);
export const fetchLikeFeedSuccess = createAction(
  "FEEDS_GLOBAL/FETCH_LIKE_FEED_SUCCESS"
);
export const fetchLikeFeedError = createAction(
  "FEEDS_GLOBAL/FETCH_LIKE_FEED_ERROR"
);
