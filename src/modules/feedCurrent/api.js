import { request } from "helpers/request";

export const getFeedCurrent = async slug => {
  try {
    return await request({ url: `/articles/${slug}`, method: "GET" });
  } catch (e) {
    throw { status: 400, message: "Ошибка получения данных" };
  }
};

export const deleteFeedCurrent = async slug => {
  try {
    return await request({ url: `/articles/${slug}`, method: "DELETE" }, true);
  } catch (e) {
    throw { status: 400, message: "Ошибка получения данных" };
  }
};
