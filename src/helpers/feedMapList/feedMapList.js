export const feedMapList = payload =>
  payload.data.articles.map(
    ({
      title,
      slug,
      createdAt,
      tagList,
      description,
      favorited,
      favoritesCount,
      author: { username, image }
    }) => ({
      title,
      slug,
      createdAt,
      tagList,
      description,
      favorited,
      favoritesCount,
      author: {
        username,
        image
      }
    })
  );
