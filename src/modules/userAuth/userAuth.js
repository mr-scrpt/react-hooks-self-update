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
  resetAuthUserError
} from "./actions";

const user = handleActions(
  {
    [fetchAuthUserRequest]: () => ({}),
    [fetchAuthUserSuccess]: (_, { payload }) => payload.data.user,
    [sendUserToAuthRequest]: () => ({}),
    [resetAuthUser]: () => ({}),
    [setAuthUserError]: () => ({}),
    [setAuthUserErrorValidation]: () => ({})
  },
  {}
);
const isLoggedIn = handleActions(
  {
    [fetchAuthUserRequest]: () => false,
    [fetchAuthUserSuccess]: () => true,
    [setAuthUserError]: () => false,
    [setAuthUserErrorValidation]: () => false,
    [resetAuthUser]: () => false
  },
  false
);
const loading = handleActions(
  {
    [fetchAuthUserRequest]: () => true,
    [sendUserToAuthRequest]: () => true,
    [sendUserToRegistrationRequest]: () => true,
    [fetchAuthUserSuccess]: () => false,
    [setAuthUserError]: () => false,
    [setAuthUserErrorValidation]: () => false
  },
  false
);
const error = handleActions(
  {
    [setAuthUserError]: () => () => (_, { payload }) => payload,
    [fetchAuthUserRequest]: () => "",
    [fetchAuthUserSuccess]: () => "",
    [sendUserToAuthRequest]: () => "",
    [sendUserToRegistrationRequest]: () => "",
    [resetAuthUser]: () => "",
    [resetAuthUserError]: () => ""
  },
  ""
);
const errorValidation = handleActions(
  {
    [setAuthUserErrorValidation]: (_, { payload }) => payload,
    [sendUserToAuthRequest]: () => ({}),
    [sendUserToRegistrationRequest]: () => ({}),
    [resetAuthUserError]: () => ({})
  },
  {}
);
export default combineReducers({
  user,
  isLoggedIn,
  loading,
  error,
  errorValidation
});
