import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import {
  fetchAuthUserRequest,
  fetchAuthUserSuccess,
  fetchAuthUserError,
  resetAuthUser
} from "./actions";

const user = handleActions(
  {
    [fetchAuthUserRequest]: () => ({}),
    [fetchAuthUserSuccess]: (_, { payload }) => payload.data.user,
    [fetchAuthUserError]: () => ({}),
    [resetAuthUser]: () => ({})
  },
  {}
);
const isLoggedIn = handleActions(
  {
    [fetchAuthUserRequest]: () => false,
    [fetchAuthUserSuccess]: () => true,
    [fetchAuthUserError]: () => false,
    [resetAuthUser]: () => false
  },
  false
);
const loading = handleActions(
  {
    [fetchAuthUserRequest]: () => true,
    [fetchAuthUserSuccess]: () => false,
    [fetchAuthUserError]: () => false,
    [resetAuthUser]: () => false
  },
  false
);
const error = handleActions(
  {
    [fetchAuthUserRequest]: () => ({}),
    [fetchAuthUserSuccess]: () => ({}),
    [fetchAuthUserError]: (_, { payload }) => payload,
    [resetAuthUser]: () => ({})
  },
  {}
);

export default combineReducers({
  user,
  isLoggedIn,
  loading,
  error
});
