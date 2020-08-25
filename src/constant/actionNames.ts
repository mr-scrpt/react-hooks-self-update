/*=== FeedsGlobal LIST===*/

export const feedsGlobalRequest = "@FEEDS_GLOBAL/FETCH_REQUEST";
export const feedsGlobalSuccess = "@FEEDS_GLOBAL/FETCH_SUCCESS";
export const feedsGlobalError = "@FEEDS_GLOBAL/FETCH_ERROR";

/* export type TActiosGlobalFeedsList =
  | typeof feedsGlobalRequest
  | typeof feedsGlobalSuccess
  | typeof feedsGlobalError; */

/*=== FeedsGlobal Count ===*/

export const feedsGlobalCountRequest = "@FEEDS_GLOBAL/FETCH_COUNT_REQUEST";
export const feedsGlobalCountSuccess = "@FEEDS_GLOBAL/FETCH_COUNT_SUCCESS";
export const feedsGlobalCountError = "@FEEDS_GLOBAL/FETCH_COUNT_ERROR";

/* export type TActiosGlobalFeedsCount =
  | typeof feedsGlobalCountRequest
  | typeof feedsGlobalCountSuccess
  | typeof feedsGlobalCountError; */

/*=== FeedsGlobal Like ===*/

export const feedsLikeFeedRequest = "@FEEDS_GLOBAL/FETCH_LIKE_FEED_REQUEST";
export const feedsLikeFeedSuccess = "@FEEDS_GLOBAL/FETCH_LIKE_FEED_SUCCESS";
export const feedsLikeFeedError = "@FEEDS_GLOBAL/FETCH_LIKE_FEED_ERROR";

/* export type TActiosGlobalFeedsLike =
  | typeof feedsLikeFeedRequest
  | typeof feedsLikeFeedSuccess
  | typeof feedsLikeFeedError;
 */

/*=== AUTENTIFICATE ===*/
export const sendUserToAuthRequestActionName =
  "@AUTH_USER/SEND_USER_TO_AUTH_REQUEST";
export const sendUserToAuthSuccessActionName =
  "@AUTH_USER/SEND_USER_TO_AUTH_SUCCESS";
export const sendUserToAuthErrorActionName =
  "@AUTH_USER/SEND_USER_TO_AUTH_ERROR";

export const setUserActionName = "@AUTH_USER/SET_USER";

export const fetchUserRequestActionName = "@AUTH_USER/FETCH_USER_REQUEST";
export const fetchUserSuccessActionName = "@AUTH_USER/FETCH_USER_SUCCESS";
export const fetchUserErrorActionName = "@AUTH_USER/FETCH_USER_ERROR";