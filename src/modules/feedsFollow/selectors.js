import { createSelector } from "reselect";

export const getFeedsList = createSelector(
  state => state.feedsFollowStore.feedsList,
  feedList => feedList
);
export const getFeedsCount = createSelector(
  state => state.feedsFollowStore.feedsCount,
  feedsCount => feedsCount
);
export const getFeedsLoading = createSelector(
  state => state.feedsFollowStore.loading,
  loading => loading
);
export const getFeedsError = createSelector(
  state => state.feedsFollowStore.error,
  error => error
);
