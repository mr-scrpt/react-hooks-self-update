import { createAction } from "redux-actions";

// CREATE PROFILE
export const createProfileRequest = createAction(
  "USER_PROFILE/CREATE_PROFILE_REQUEST"
);

export const createProfileSuccess = createAction(
  "USER_PROFILE/CREATE_PROFILE_SUCCESS"
);

export const createProfileError = createAction(
  "USER_PROFILE/CREATE_PROFILE_ERROR"
);

// PUT PROFILE
export const putProfileRequest = createAction(
  "USER_PROFILE/PUT_PROFILE_REQUEST"
);

export const putProfileSuccess = createAction(
  "USER_PROFILE/PUT_PROFILE_SUCCESS"
);

export const putProfileError = createAction("USER_PROFILE/PUT_PROFILE_ERROR");

// FETHC PROFILE
export const fetchProfileRequest = createAction(
  "USER_PROFILE/FETCH_PROFILE_REQUEST"
);

export const fetchProfileSuccess = createAction(
  "USER_PROFILE/FETCH_PROFILE_SUCCESS"
);

export const fetchProfileError = createAction(
  "USER_PROFILE/FETCH_PROFILE_ERROR"
);

export const resetProfileStore = createAction(
  "USER_PROFILE/RESET_PROFILE_STORE"
);

// FETHC USER FEED
export const fetchUserFeedsRequest = createAction(
  "USER_PROFILE/FETCH_USER_FEED_REQUEST"
);

export const fetchUserFeedsSuccess = createAction(
  "USER_PROFILE/FETCH_USER_FEED_SUCCESS"
);

export const fetchUserFeedsError = createAction(
  "USER_PROFILE/FETCH_USER_FEED_ERROR"
);

export const resetUserFeedsStore = createAction(
  "USER_PROFILE/RESET_USER_FEED_STORE"
);
// FETHC USER FEED FAVORITED
export const fetchUserFeedsFavoritedRequest = createAction(
  "USER_PROFILE/FETCH_USER_FEED_FAVORITED_REQUEST"
);

export const fetchUserFeedsFavoritedSuccess = createAction(
  "USER_PROFILE/FETCH_USER_FEED_FAVORITED_SUCCESS"
);

export const fetchUserFeedsFavoritedError = createAction(
  "USER_PROFILE/FETCH_USER_FEED_FAVORITED_ERROR"
);

export const resetUserFeedsFavoritedStore = createAction(
  "USER_PROFILE/RESET_USER_FEED_FAVORITED_STORE"
);
