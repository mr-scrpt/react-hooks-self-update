import { request } from "helpers/request";
export const getTagsPopular = async () => {
  try {
    return await request({ url: `/tags1`, method: "GET" });
  } catch (error) {
    return Promise.reject("Ошибка получения данных");
    /* throw {
      status: 400,
      message: "Ошибка получения данных"
    }; */
  }
};
