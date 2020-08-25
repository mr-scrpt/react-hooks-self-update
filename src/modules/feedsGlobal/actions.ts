//Types
import {
  feedsGlobalFetchingStartActionType,
  feedsGlobalFetchingFinishActionType,
  feedsGlobalRequestActionType,
  feedsGlobalRequestSuccessActionType,
  feedsGlobalRequestErrorActionType,
  feedsGlobalFillActionType,
  FeedsActionTypes,
  FEEDS_GLOBAL_FETCHING_START,
  FEEDS_GLOBAL_FETCHING_FINISH,
  FEEDS_GLOBAL_REQUEST,
  FEEDS_GLOBAL_REQUEST_SUCCESS,
  FEEDS_GLOBAL_REQUEST_ERROR,
  FEEDS_GLOBAL_FILL,
} from "@md/feedsGlobal/actionTypes";

import { ErrorHttpAction, FeedsListType } from "@md/feedsGlobal/types";

/*=== FeedsGlobal Actions ===*/

export const feedsGlobalFetchingStartAction = (): FeedsActionTypes => ({
  type: FEEDS_GLOBAL_FETCHING_START,
});

export const feedsGlobalFetchingFinishAction = (): FeedsActionTypes => ({
  type: FEEDS_GLOBAL_FETCHING_FINISH,
});

export const feedsGlobalRequestAction = (): FeedsActionTypes => ({
  type: FEEDS_GLOBAL_REQUEST,
});

export const feedsGlobalRequestSuccessAction = (): FeedsActionTypes => ({
  type: FEEDS_GLOBAL_REQUEST_SUCCESS,
});

export const feedsGlobalRequestErrorAction = (
  payload: ErrorHttpAction
): feedsGlobalRequestErrorActionType => ({
  type: FEEDS_GLOBAL_REQUEST_ERROR,
  error: true,
  payload,
});

export const feedsGlobalFillAction = (
  payload: FeedsListType
): feedsGlobalFillActionType => ({
  type: FEEDS_GLOBAL_FILL,
  payload,
});

/* export const fetchFeedsGlobalRequest = (setting: {
  limit: number;
  offset: number;
}) => action(actionsNames.feedsGlobalRequest, setting);

export const fetchFeedsGlobalSuccess = (articles: Array<object>) =>
  action(actionsNames.feedsGlobalSuccess, articles);

export const fetchFeedsGlobalError = (error: string) =>
  action(actionsNames.feedsGlobalError, error); */

/*=== FeedsGlobal Count ===*/

/* export const fetchFeedsGlobalCountRequest = () =>
  action(actionsNames.feedsGlobalCountRequest);

export const fetchFeedsGlobalCountSuccess = (count: number) =>
  action(actionsNames.feedsGlobalCountSuccess, count);

export const fetchFeedsGlobalCountError = (error: string) =>
  action(actionsNames.feedsGlobalError, error);
 */
/*=== FeedsGlobal Like ===*/

/* export const fetchLikeFeedRequest = (id: string) =>
  action(actionsNames.feedsLikeFeedRequest, id); //id?
export const fetchLikeFeedSuccess = (id: string) =>
  action(actionsNames.feedsLikeFeedSuccess, id); //id?
export const fetchLikeFeedError = (id: string) =>
  action(actionsNames.feedsLikeFeedError, id); //id?
 */
