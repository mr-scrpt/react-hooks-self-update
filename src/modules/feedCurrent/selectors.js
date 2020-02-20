import { createSelector } from "reselect";

export const getCurretnFeed = createSelector(
  state => state.feedCurrentStore.feedCurrent,
  feedCurrent => feedCurrent
);
export const getFeedLoading = createSelector(
  state => state.feedCurrentStore.loading,
  loading => loading
);
export const getFeedError = createSelector(
  state => state.feedCurrentStore.error,
  error => error
);
