import { createSelector } from "reselect";

export const getFeedsList = createSelector(
  state => state.feedsTagsStore.feedsList,
  feedList => feedList
);
export const getFeedsCount = createSelector(
  state => state.feedsTagsStore.feedsCount,
  feedsCount => feedsCount
);
export const getFeedsLoading = createSelector(
  state => state.feedsTagsStore.loading,
  loading => loading
);
export const getFeedsError = createSelector(
  state => state.feedsTagsStore.error,
  error => error
);
