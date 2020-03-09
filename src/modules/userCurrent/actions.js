import { createAction } from "redux-actions";

export const fetchCurrentUserRequest = createAction(
  "CURRENT_USER/FETCH_REQUEST"
);
export const fetchCurrentUserSuccess = createAction(
  "CURRENT_USER/FETCH_SUCCESS"
);
export const fetchCurrentUserError = createAction("CURRENT_USER/FETCH_ERROR");

export const resetCurrentUser = createAction("CURRENT_USER/RESET");
