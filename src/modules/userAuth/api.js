import { request } from "helpers/request";

export const setUserAuth = async user => {
  try {
    return await request({
      url: `users/login`,
      method: "POST",
      data: {
        user
      }
    });
  } catch (error) {
    throw {
      status: 400,
      message: "Ошибка. Не правильный логин или пароль"
    };
  }
};

export const getUserAuth = async () => {
  try {
    return await request({ url: `/user`, method: "GET" }, true);
  } catch (error) {
    throw {
      status: 400,
      message: "Ошибка получения данных"
    };
  }
};
