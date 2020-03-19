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

export const resetError = createAction("AUTH_USER/RESET_ERROR");

// PUT PROFILE
export const putUserAuthRequest = createAction(
  "AUTH_USER/PUT_USER_AUTH_REQUEST"
);

export const putUserAuthSuccess = createAction(
  "AUTH_USER/PUT_USER_AUTH_SUCCESS"
);

export const putUserAuthError = createAction("AUTH_USER/PUT_USER_AUTH_ERROR");
