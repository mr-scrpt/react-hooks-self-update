import { createSelector } from "reselect";

export const getTagList = createSelector(
  state => state.tagsPopularStore.tagsList,
  tagsList => tagsList
);

export const getActiveTag = createSelector(
  state => state.tagsPopularStore,
  activeTag => activeTag
);
