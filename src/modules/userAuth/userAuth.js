import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import {
  fetchAuthUserRequest,
  fetchAuthUserSuccess,
  fetchAuthUserError,
  sendUserToAuthRequest,
  sendUserToRegistrationRequest,
  resetUserAuthUser
} from "./actions";

const user = handleActions(
  {
    [fetchAuthUserRequest]: () => ({}),
    [fetchAuthUserSuccess]: (_, { payload }) => payload.data.user,
    [fetchAuthUserError]: () => ({}),
    [resetUserAuthUser]: () => ({})
  },
  {}
);
const isLoggedIn = handleActions(
  {
    [fetchAuthUserRequest]: () => false,
    [fetchAuthUserSuccess]: () => true,
    [fetchAuthUserError]: () => false,
    [resetUserAuthUser]: () => false
  },
  false
);
const loading = handleActions(
  {
    [fetchAuthUserRequest]: () => true,
    [sendUserToAuthRequest]: () => true,
    [sendUserToRegistrationRequest]: () => true,
    [fetchAuthUserSuccess]: () => false,
    [fetchAuthUserError]: () => false,
    [resetUserAuthUser]: () => false
  },
  false
);
const error = handleActions(
  {
    [fetchAuthUserRequest]: () => ({}),
    [fetchAuthUserSuccess]: () => ({}),
    [fetchAuthUserError]: (_, { payload }) => payload,
    [resetUserAuthUser]: () => ({})
  },
  {}
);

export default combineReducers({
  user,
  isLoggedIn,
  loading,
  error
});
