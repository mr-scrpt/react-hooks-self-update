import { request } from "helpers/request";

export const sendUserToRegistration = async user => {
  try {
    return await request({
      url: `users`,
      method: "POST",
      data: {
        user
      }
    });
  } catch (error) {
    throw {
      status: 400,
      message: error.errors //получаем ошибки валидации от сервера
    };
  }
};

export const sendUserToAuthorization = async user => {
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
      message: error.errors //получаем ошибки валидации от сервера
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
