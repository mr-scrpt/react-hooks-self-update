import { stringify } from "query-string";
import { request } from "helpers/request";

export const getUser = async slug => {
  try {
    return await request({ url: `profiles/${slug}`, method: "GET" }, true);
  } catch (e) {
    throw { status: 400, message: "Ошибка получения получения пользователя" }; //получаем ошибки валидации от сервера
  }
};

export const getUserFeeds = async ({ limit, offset, author }) => {
  const stingifyParams = stringify({
    author,
    limit,
    offset
  });

  try {
    return await request(
      { url: `articles?${stingifyParams}`, method: "GET" },
      true
    );
  } catch (e) {
    throw { status: 400, message: "Ошибка получения получения пользователя" }; //получаем ошибки валидации от сервера
  }
};

export const getUserFeedsFavorited = async ({ limit, offset, author }) => {
  const stingifyParams = stringify({
    favorited: author,
    limit,
    offset
  });
  /* articles?favorited=Dolce&limit=10&offset=0 */
  try {
    return await request(
      { url: `articles?${stingifyParams}`, method: "GET" },
      true
    );
  } catch (e) {
    throw { status: 400, message: "Ошибка получения получения пользователя" }; //получаем ошибки валидации от сервера
  }
};
