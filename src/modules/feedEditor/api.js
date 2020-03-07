import { request } from "helpers/request";

export const createFeed = async data => {
  try {
    return await request({ url: `/articles`, method: "POST", data }, true);
  } catch (e) {
    throw { status: 400, message: e.errors }; //получаем ошибки валидации от сервера
  }
};

export const getFeed = async slug => {
  try {
    return await request({ url: `/articles/${slug}`, method: "GET" });
  } catch (e) {
    throw { status: 400, message: "Ошибка получения данных" };
  }
};

export const deleteFeed = async slug => {
  try {
    return await request({ url: `/articles/${slug}`, method: "DELETE" }, true);
  } catch (e) {
    throw { status: 400, message: "Ошибка удаления данных" };
  }
};

export const putFeed = async feed => {
  try {
    return await request(
      { url: `/articles/${feed.slug}`, method: "PUT", data: feed },
      true
    );
  } catch (e) {
    throw { status: 400, message: "Ошибка обновления данных" };
  }
};
