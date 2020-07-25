import { request } from "helpers/request";
import { type } from "os";

type TResponse = {
  data: TResponseUser;
};
type TResponseUser = {
  user: object; //TODO добавить тип юзера
};
export const sendUserToRegistration = async (user: object) => {
  //TODO добавить тип юзера
  try {
    const res = <TResponse>await request(
      {
        url: `users`,
        method: "POST",
        data: {
          user,
        },
      },
      false
    );
    return res.data.user;
  } catch (error) {
    return Promise.reject(error);
    /* throw {
      status: 400,
      message: error.errors //получаем ошибки валидации от сервера
    }; */
  }
};

export const sendUserToAuthorization = async (user: object) => {
  //TODO добавить тип юзера
  try {
    const res = <TResponse>await request(
      {
        url: `users/login`,
        method: "POST",
        data: {
          user,
        },
      },
      false
    );
    return res.data.user;
  } catch (error) {
    throw {
      status: 400,
      message: error.errors, //получаем ошибки валидации от сервера
    };
  }
};

export const getUserAuth = async () => {
  try {
    const res = <TResponse>await request({ url: `/user`, method: "GET" }, true);
    return res.data.user;
  } catch (error) {
    throw {
      status: 400,
      message: "Ошибка получения данных",
    };
  }
};

export const putUserAuth = async (user: object) => {
  //TODO добавить тип юзера
  console.log("api", user);

  try {
    const res = <TResponse>await request(
      {
        url: `/user`,
        method: "PUT",
        data: {
          user,
        },
      },
      true
    );
    return res.data.user;
  } catch (error) {
    throw {
      status: 400,
      message: "Ошибка обновления данных",
    };
  }
};
