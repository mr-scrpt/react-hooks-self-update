export const feedMapListLike = (state: any, payload: any): object =>
  state.map((feed: any): object => {
    if (feed.slug !== payload.slug) {
      return { ...feed };
    }
    return {
      ...feed,
      favorited: !feed.favorited,
      favoritesCount: feed.favorited
        ? feed.favoritesCount - 1
        : feed.favoritesCount + 1,
    };
  });
