import { initialState } from "@md/userAuth";

export type TState = typeof initialState;

export type TUser = {
  bio: string;
  createdAt: string;
  email: string;
  id: number;
  image: string;
  token: string;
  updatedAt: string;
  username: string;
};

export type TPayload = {
  data: {
    user: Object;
    isLoggedIn: boolean;
    loading: boolean;
    error: Object;
    errorValidation: string;
  };
};

type Without<T, K> = {
  [L in Exclude<keyof T, K>]: T[L];
};
export type TUserSerialized = Without<TUser, "token">;

export type TIsLoggedIn = boolean;
export type TLoading = boolean;
export type TError = {
  status: number;
  message: string;
};

export type TErrorValidation = string;

export type TLogin = {
  email: string;
  password: string;
};
