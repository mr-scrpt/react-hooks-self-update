import { createSelector } from "reselect";

export const getFeed = createSelector(
  state => state.feedEditorStore.feed,
  feed => feed
);
export const getFeedLoading = createSelector(
  state => state.feedEditorStore.loading,
  loading => loading
);
export const getFeedError = createSelector(
  state => state.feedEditorStore.error.message,
  error => error
);

export const getBeDeleted = createSelector(
  state => state.feedEditorStore.beDeleted,
  beDeleted => beDeleted
);

export const getBeCreated = createSelector(
  state => state.feedEditorStore.beCreated,
  beCreated => beCreated
);

export const getBeEdited = createSelector(
  state => state.feedEditorStore.beEdited,
  beEdited => beEdited
);
