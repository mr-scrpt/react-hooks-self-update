import { createAction, Action } from "redux-actions";

// AUTORIZATION
export const sendUserToAuthRequest = createAction(
  "AUTH_USER/SEND_USER_TO_AUTH_REQUEST"
);

// REGISTRATION
export const sendUserToRegistrationRequest = createAction(
  "AUTH_USER/SEND_USER_TO_REGISTRATION_REQUEST"
);

// LOGOUT
export const resetAuthUser = createAction("AUTH_USER/RESET_AUTH_USER");

// FETCH AUTH USER
export const fetchAuthUserRequest = createAction(
  "AUTH_USER/FETCH_USER_REQUEST"
);
export const fetchAuthUserSuccess = createAction(
  "AUTH_USER/FETCH_USER_SUCCESS"
);

// PUT AUTH USER
export const putAuthUserRequest = createAction(
  "AUTH_USER/PUT_USER_AUTH_REQUEST"
);

// ERRORS
export const setAuthUserError = createAction("AUTH_USER/SET_ERROR");
export const setAuthUserErrorValidation = createAction(
  "AUTH_USER/SET_ERROR_VALIDATION"
);
export const resetAuthUserError = createAction("AUTH_USER/RESET_ERROR");
