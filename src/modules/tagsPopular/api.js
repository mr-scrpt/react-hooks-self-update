import { request } from "helpers/request";
export const getTagsPopular = async () => {
  try {
    return await request({ url: `/tags`, method: "GET" });
  } catch (error) {
    throw {
      status: 400,
      message: "Ошибка получения данных"
    };
  }
};
