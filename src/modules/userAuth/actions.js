import { createAction } from "redux-actions";

export const sendUserToAuthRequest = createAction(
  "AUTH_USER/SEND_USER_TO_AUTH_REQUEST"
);

export const sendUserToRegistrationRequest = createAction(
  "AUTH_USER/SEND_USER_TO_REGISTRATION_REQUEST"
);
export const resetUserAuthUser = createAction("AUTH_USER/RESET_USER_AUTH");

export const fetchAuthUserRequest = createAction(
  "AUTH_USER/FETCH_USER_REQUEST"
);
export const fetchAuthUserSuccess = createAction(
  "AUTH_USER/FETCH_USER_SUCCESS"
);
export const fetchAuthUserError = createAction("AUTH_USER/FETCH_USER_ERROR");
