import { request } from "helpers/request";

export const getFeedCurrent = async slug => {
  try {
    return await request({ url: `/articles/${slug}`, method: "GET" });
  } catch (e) {
    throw new Error("Ошибка получения фида");
  }
};
