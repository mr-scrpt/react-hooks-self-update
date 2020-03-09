import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import {
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
  resetCurrentUser
} from "./actions";

const user = handleActions(
  {
    [fetchCurrentUserRequest]: () => ({}),
    [fetchCurrentUserSuccess]: (_, { payload }) => payload.data.user,
    [fetchCurrentUserError]: () => ({}),
    [resetCurrentUser]: () => ({})
  },
  {}
);
const isLoggedIn = handleActions(
  {
    [fetchCurrentUserRequest]: () => false,
    [fetchCurrentUserSuccess]: () => true,
    [fetchCurrentUserError]: () => false,
    [resetCurrentUser]: () => false
  },
  false
);
const loading = handleActions(
  {
    [fetchCurrentUserRequest]: () => true,
    [fetchCurrentUserSuccess]: () => false,
    [fetchCurrentUserError]: () => false,
    [resetCurrentUser]: () => false
  },
  false
);
const error = handleActions(
  {
    [fetchCurrentUserRequest]: () => ({}),
    [fetchCurrentUserSuccess]: () => ({}),
    [fetchCurrentUserError]: (_, { payload }) => payload,
    [resetCurrentUser]: () => ({})
  },
  {}
);

export default combineReducers({
  user,
  isLoggedIn,
  loading,
  error
});
