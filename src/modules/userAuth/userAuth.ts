import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import {
  fetchAuthUserRequest,
  fetchAuthUserSuccess,
  sendUserToAuthRequest,
  sendUserToRegistrationRequest,
  resetAuthUser,
  setAuthUserError,
  setAuthUserErrorValidation,
  resetAuthUserError,
} from "./actions";

export type TPayload = {
  data: {
    user: Object;
    isLoggedIn: boolean;
    loading: boolean;
    error: Object;
    errorValidation: string;
  };
};
export type TUser = object;
export type TIsLoggedIn = boolean;
export type TLoading = boolean;
export type TError = {
  status: number;
  message: string;
};
export type TErrorValidation = string;

const initialState = {
  user: {},
  isLoggedIn: false,
  loading: false,
  error: {
    status: 0,
    message: "",
  },
  errorValidation: "",
};

export type TState = typeof initialState;

const user = handleActions<TUser>(
  {
    [typeof fetchAuthUserRequest]: () => initialState.user,
    [typeof fetchAuthUserSuccess]: (_, { payload }) => payload,
    [typeof sendUserToAuthRequest]: () => initialState.user,
    [typeof resetAuthUser]: () => initialState.user,
    [typeof setAuthUserError]: () => initialState.user,
    [typeof setAuthUserErrorValidation]: () => initialState.user,
  },
  initialState.user
);
const isLoggedIn = handleActions<TIsLoggedIn>(
  {
    [typeof fetchAuthUserRequest]: () => initialState.isLoggedIn,
    [typeof fetchAuthUserSuccess]: () => true,
    [typeof setAuthUserError]: () => initialState.isLoggedIn,
    [typeof setAuthUserErrorValidation]: () => initialState.isLoggedIn,
    [typeof resetAuthUser]: () => initialState.isLoggedIn,
  },
  initialState.isLoggedIn
);
const loading = handleActions<TLoading>(
  {
    [typeof fetchAuthUserRequest]: () => true,
    [typeof sendUserToAuthRequest]: () => true,
    [typeof sendUserToRegistrationRequest]: () => true,
    [typeof fetchAuthUserSuccess]: () => initialState.loading,
    [typeof setAuthUserError]: () => initialState.loading,
    [typeof setAuthUserErrorValidation]: () => initialState.loading,
  },
  initialState.loading
);
const error = handleActions<TError>(
  {
    [typeof setAuthUserError]: (_, { payload }) => payload,
    [typeof fetchAuthUserRequest]: () => initialState.error,
    [typeof fetchAuthUserSuccess]: () => initialState.error,
    [typeof sendUserToAuthRequest]: () => initialState.error,
    [typeof sendUserToRegistrationRequest]: () => initialState.error,
    [typeof resetAuthUser]: () => initialState.error,
    [typeof resetAuthUserError]: () => initialState.error,
  },
  initialState.error
);

/* const errorValidation = handleActions<TErrorValidation>(
  {
    [typeof setAuthUserErrorValidation]: (_, { payload }) => payload,
    [typeof sendUserToAuthRequest]: () => "",
    [typeof sendUserToRegistrationRequest]: () => "",
    [typeof resetAuthUserError]: () => "",
  },
  initialState.errorValidation
); */
export default combineReducers({
  user,
  isLoggedIn,
  loading,
  error,
  //errorValidation,
});
