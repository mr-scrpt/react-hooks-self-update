import { request } from "helpers/request";

export const getUserCurrent = async () => {
  try {
    return await request({ url: `/user`, method: "GET" }, true);
  } catch (error) {
    throw {
      status: 400,
      message: "Ошибка получения данных"
    };
  }
};
