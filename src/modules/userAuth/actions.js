import { createAction } from "redux-actions";

export const setAuthUserRequest = createAction("AUTH_USER/SET_USER_REQUEST");
export const setAuthUserSuccess = createAction("AUTH_USER/SET_USER_SUCCESS");
export const setAuthUserError = createAction("AUTH_USER/SET_USER_ERROR");

export const resetAuthUser = createAction("AUTH_USER/RESET");

export const fetchAuthUserRequest = createAction(
  "AUTH_USER/FETCH_USER_REQUEST"
);
export const fetchAuthUserSuccess = createAction(
  "AUTH_USER/FETCH_USER_SUCCESS"
);
export const fetchAuthUserError = createAction("AUTH_USER/FETCH_USER_ERROR");
