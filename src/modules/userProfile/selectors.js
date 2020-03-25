import { createSelector } from "reselect";
// USER
export const getUser = createSelector(
  state => state.userProfileStore.user,
  user => user
);

export const getUserIsLoading = createSelector(
  state => state.userProfileStore.userLoading,
  userLoading => userLoading
);

export const getUserIsError = createSelector(
  state => state.userProfileStore.userError,
  userError => userError
);

// USER FEEDS
export const getFeedsList = createSelector(
  state => state.userProfileStore.userFeeds,
  userFeed => userFeed
);
export const getFeedsCount = createSelector(
  state => state.userProfileStore.userFeedsCount,
  userFeedCount => userFeedCount
);
export const getFeedsLoading = createSelector(
  state => state.userProfileStore.userFeedsLoading,
  userFeedsLoading => userFeedsLoading
);

export const getFeedsError = createSelector(
  state => state.userProfileStore.userFeedsError,
  userFeedsError => userFeedsError
);

// USER FEEDS FAVORITED
export const getUserFeedsFavorited = createSelector(
  state => state.userProfileStore.userFeedsFavorited,
  userFeedsFavorited => userFeedsFavorited
);
export const getUserFeedsFavoritedCount = createSelector(
  state => state.userProfileStore.userFeedsFavoritedCount,
  userFeedFavoritedCount => userFeedFavoritedCount
);

export const getUserFeedsFavoritedIsLoading = createSelector(
  state => state.userProfileStore.userFeedsFavoritedLoading,
  userFeedsFavoritedLoading => userFeedsFavoritedLoading
);

export const getUserFeedsFavoritedIsError = createSelector(
  state => state.userProfileStore.userFeedsFavoritedError,
  userFeedsFavoritedError => userFeedsFavoritedError
);
