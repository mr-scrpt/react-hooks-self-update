import { stringify } from "query-string";
import { request } from "helpers/request";

export const getUser = async slug => {
  try {
    return await request({ url: `profiles/${slug}`, method: "GET" }, true);
  } catch (e) {
    return Promise.reject("Ошибка получения пользователя");
    //throw { status: 400, message: "Ошибка получения получения пользователя" };
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
    return Promise.reject("Ошибка получения фидов пользователя");
    //throw { status: 400, message: "Ошибка получения получения пользователя" };
  }
};

export const getUserFeedsFavorited = async ({ limit, offset, author }) => {
  const stingifyParams = stringify({
    favorited: author,
    limit,
    offset
  });

  try {
    return await request(
      { url: `articles?${stingifyParams}`, method: "GET" },
      true
    );
  } catch (e) {
    return Promise.reject("Ошибка получения отслеживаемых фидов пользователя");
    //throw { status: 400, message: "Ошибка получения получения пользователя" }; //получаем ошибки валидации от сервера
  }
};
