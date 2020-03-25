import { request } from "helpers/request";

export const createFeed = async data => {
  try {
    return await request({ url: `/articles`, method: "POST", data }, true);
  } catch (error) {
    return Promise.reject(error); // сервер может вернуть ошибки валидации
  }
};

export const fetchFeed = async slug => {
  try {
    return await request({ url: `/articles/${slug}`, method: "GET" }, true);
  } catch (error) {
    return Promise.reject("Ошибка получения фида");
    //throw { status: 400, message: "Ошибка получения данных" };
  }
};

export const deleteFeed = async slug => {
  try {
    return await request({ url: `/articles/${slug}`, method: "DELETE" }, true);
  } catch (error) {
    return Promise.reject("Ошибка удаления фида");
    //throw { status: 400, message: "Ошибка удаления данных" };
  }
};

export const putFeed = async feed => {
  try {
    return await request(
      { url: `/articles/${feed.slug}`, method: "PUT", data: feed },
      true
    );
  } catch (error) {
    return Promise.reject("Ошибка обновления данных");
    //throw { status: 400, message: "Ошибка обновления данных" };
  }
};

export const setFeedIsFavirited = async slug => {
  try {
    return await request(
      { url: `/articles/${slug}/favorite`, method: "POST" },
      true
    );
  } catch (error) {
    return Promise.reject("Ошибка добавление в избранное");
    //throw { status: 400, message: "Ошибка добавление в избранное" };
  }
};

export const removeFeedIsFavirited = async slug => {
  try {
    return await request(
      { url: `/articles/${slug}/favorite`, method: "DELETE" },
      true
    );
  } catch (error) {
    return Promise.reject("Ошибка удаления из избранного");
    //throw { status: 400, message: "Ошибка удаления из избранного" };
  }
};

export const togglelikeFeed = async ({ favorited, slug }) => {
  const method = favorited ? "DELETE" : "POST";
  try {
    return await request({ url: `/articles/${slug}/favorite`, method }, true);
  } catch (error) {
    return Promise.reject("Ошибка удаления или добавления в избранное");
    /* throw {
      status: 400,
      message: "Ошибка удаления или добавления в избранное"
    }; */
  }
};

export const toggleFollowAuthor = async ({ isFollow, author }) => {
  const method = isFollow ? "DELETE" : "POST";
  try {
    return await request({ url: `/profiles/${author}/follow`, method }, true);
  } catch (error) {
    throw {
      status: 400,
      message: "Ошибка добавления или удаления автора из листа подписки"
    };
  }
};

export const fetchIsFollowAuthor = async ({ author }) => {
  try {
    return await request(
      { url: `/profiles/${author}/follow`, method: "GET" },
      true
    );
  } catch (error) {
    throw {
      status: 400,
      message: "Ошибка добавления или удаления автора из листа подписки"
    };
  }
};
