import { request } from "helpers/request";
import { TLogin, TUser } from "@md/userAuth";
import { promises } from "fs";
import { TError } from "@md/types";

type TResponseUser = {
  data: { user: TUser };
};
export const sendUserToAuthAPI = async (
  user: TLogin
): Promise<TUser | TError> => {
  //TODO Errors types instead string
  try {
    const res = <TResponseUser>await request(
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
      message: error.errors || error, //получаем ошибки валидации от сервера или обычная ошибка(сервер неответил)
    };
  }
};

/* type TResponseUser = {
  user: object; //TODO добавить тип юзера
}; */
export const sendUserToRegistration = async (user: object) => {
  //TODO добавить тип юзера
  try {
    const res = <TResponseUser>await request(
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

export const getUserAuth = async () => {
  try {
    const res = <TResponseUser>(
      await request({ url: `/user`, method: "GET" }, true)
    );
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
    const res = <TResponseUser>await request(
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
