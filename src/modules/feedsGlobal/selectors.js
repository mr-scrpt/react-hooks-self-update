import { createSelector } from "reselect";

export const getFeedsList = createSelector(
  state => state.feedsGlobalStore.feedsList,
  feedList => feedList
);
export const getFeedsCount = createSelector(
  state => state.feedsGlobalStore.feedsCount,
  feedsCount => feedsCount
);
export const getFeedsLoading = createSelector(
  state => state.feedsGlobalStore.loading,
  loading => loading
);
export const getFeedsError = createSelector(
  state => state.feedsGlobalStore.error,
  error => error
);
