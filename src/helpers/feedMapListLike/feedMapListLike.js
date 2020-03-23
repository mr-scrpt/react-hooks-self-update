export const feedMapListLike = (state, payload) =>
  state.map(feed => {
    if (feed.slug !== payload.slug) {
      return { ...feed };
    }
    return {
      ...feed,
      favorited: !feed.favorited,
      favoritesCount: feed.favorited
        ? feed.favoritesCount - 1
        : feed.favoritesCount + 1
    };
  });
