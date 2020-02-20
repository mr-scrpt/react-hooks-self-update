import { createAction } from "redux-actions";

export const fetchFeedsFollowRequest = createAction(
  "FEEDS_FOLLOW/FETCH_REQUEST"
);

export const fetchFeedsFollowSuccess = createAction(
  "FEEDS_FOLLOW/FETCH_SUCCESS"
);

export const fetchFeedsFollowError = createAction("FEEDS_FOLLOW/FETCH_ERROR");
