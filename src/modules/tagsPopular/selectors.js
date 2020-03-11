import { createSelector } from "reselect";

export const getActiveTag = createSelector(
  state => state.tagsPopularStore.activeTag,
  activeTag => activeTag
);
