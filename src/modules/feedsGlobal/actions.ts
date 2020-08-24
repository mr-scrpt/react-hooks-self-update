import { action } from "typesafe-actions";
import * as actionsNames from "constant/actionNames";

/*=== FeedsGlobal LIST===*/

export const fetchFeedsGlobalRequest = (setting: {
  limit: number;
  offset: number;
}) => action(actionsNames.feedsGlobalRequest, setting);

export const fetchFeedsGlobalSuccess = (articles: Array<object>) =>
  action(actionsNames.feedsGlobalSuccess, articles);

export const fetchFeedsGlobalError = (error: string) =>
  action(actionsNames.feedsGlobalError, error);

/*=== FeedsGlobal Count ===*/

export const fetchFeedsGlobalCountRequest = () =>
  action(actionsNames.feedsGlobalCountRequest);

export const fetchFeedsGlobalCountSuccess = (count: number) =>
  action(actionsNames.feedsGlobalCountSuccess, count);

export const fetchFeedsGlobalCountError = (error: string) =>
  action(actionsNames.feedsGlobalError, error);

/*=== FeedsGlobal Like ===*/

export const fetchLikeFeedRequest = (id: string) =>
  action(actionsNames.feedsLikeFeedRequest, id); //id?
export const fetchLikeFeedSuccess = (id: string) =>
  action(actionsNames.feedsLikeFeedSuccess, id); //id?
export const fetchLikeFeedError = (id: string) =>
  action(actionsNames.feedsLikeFeedError, id); //id?
