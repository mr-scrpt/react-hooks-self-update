import { createAction } from "redux-actions";

export const fetchFeedsFollowRequest = createAction(
  "FEEDS_FOLLOW/FETCH_FEEDS_REQUEST"
);

export const fetchFeedsFollowSuccess = createAction(
  "FEEDS_FOLLOW/FETCH_FEEDS_SUCCESS"
);

export const fetchFeedsFollowError = createAction("FEEDS_FOLLOW/FETCH_ERROR");
