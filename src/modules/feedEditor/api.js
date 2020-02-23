import { request } from "helpers/request";

export const fetchNewFeed = async data => {
  try {
    return await request(
      { url: `/articles/${slug}`, method: "GET", data },
      true
    );
  } catch (e) {
    throw { status: 400, message: "Ошибка добавления данных" };
  }
};
