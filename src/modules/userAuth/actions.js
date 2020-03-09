import { createAction } from "redux-actions";

export const fetchAuthUserRequest = createAction("AUTH_USER/FETCH_REQUEST");
export const fetchAuthUserSuccess = createAction("AUTH_USER/FETCH_SUCCESS");
export const fetchAuthUserError = createAction("AUTH_USER/FETCH_ERROR");

export const resetAuthUser = createAction("AUTH_USER/RESET");
