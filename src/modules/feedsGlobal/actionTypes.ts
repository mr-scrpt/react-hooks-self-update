/*=== FeedsGlobal LIST===*/
import { FeedsListType, ErrorHttpAction } from "@md/feedsGlobal/types";
// Fetching
export const FEEDS_GLOBAL_FETCHING_START = "@FEEDS_GLOBAL/FETCHING_START";
export const FEEDS_GLOBAL_FETCHING_FINISH = "@FEEDS_GLOBAL/FETCHING_FINISH";

// Async request
export const FEEDS_GLOBAL_REQUEST = "@FEEDS_GLOBAL/FETCH_REQUEST";

// Request success
export const FEEDS_GLOBAL_REQUEST_SUCCESS =
  "@FEEDS_GLOBAL/FETCH_REQUEST_SUCCESS";

// Request error
export const FEEDS_GLOBAL_REQUEST_ERROR = "@FEEDS_GLOBAL/FETCH_REQUEST_ERROR";

// Fill data
export const FEEDS_GLOBAL_FILL = "@FEEDS_GLOBAL/FEEDS_FILL";

export type feedsGlobalFetchingStartActionType = {
  type: typeof FEEDS_GLOBAL_FETCHING_START;
};
export type feedsGlobalFetchingFinishActionType = {
  type: typeof FEEDS_GLOBAL_FETCHING_FINISH;
};

export type feedsGlobalRequestActionType = {
  type: typeof FEEDS_GLOBAL_REQUEST;
};
export type feedsGlobalRequestSuccessActionType = {
  type: typeof FEEDS_GLOBAL_REQUEST_SUCCESS;
};

export type feedsGlobalRequestErrorActionType = {
  type: typeof FEEDS_GLOBAL_REQUEST_ERROR;
  error: true;
  payload: ErrorHttpAction;
};

export type feedsGlobalFillActionType = {
  type: typeof FEEDS_GLOBAL_FILL;
  payload: FeedsListType;
};

export type FeedsActionTypes =
  | feedsGlobalFetchingStartActionType
  | feedsGlobalFetchingFinishActionType
  | feedsGlobalRequestActionType
  | feedsGlobalRequestSuccessActionType
  | feedsGlobalRequestErrorActionType
  | feedsGlobalFillActionType;
