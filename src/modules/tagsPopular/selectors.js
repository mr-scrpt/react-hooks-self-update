import { createSelector } from "reselect";

export const getTagList = createSelector(
  state => state.tagsPopularStore.tagsList,
  tagsList => tagsList
);

export const getActiveTag = createSelector(
  state => state.tagsPopularStore.activeTag,
  activeTag => activeTag
);

export const getIsLoading = createSelector(
  state => state.tagsPopularStore.loading,
  loading => loading
);

export const getIsError = createSelector(
  state => state.tagsPopularStore.error,
  error => error
);
