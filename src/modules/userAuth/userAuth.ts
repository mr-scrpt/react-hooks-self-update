import { combineReducers } from "redux";
import { createReducer, ActionType } from "typesafe-actions";
import * as actionNames from "constant/actionNames";
import { TUser, TState, TUserSerialized } from "@md/userAuth";
import { TError } from "../types";

export const initialState = {
  user: {},
  isLoggedIn: false,
  loading: false,
  error: {
    status: 0,
    message: "",
  },
  errorValidation: "",
};

const user = createReducer(initialState.user)
  .handleType(
    actionNames.sendUserToAuthRequestActionName,
    () => initialState.user
  )
  .handleType(
    actionNames.sendUserToAuthSuccessActionName,
    () => initialState.user
  ) //?
  .handleType(
    actionNames.sendUserToAuthErrorActionName,
    () => initialState.user
  ) //?
  .handleType(
    actionNames.setUserActionName,
    (_: TState, { payload }: { payload: TUserSerialized }) => payload
  );

const isLoggedIn = createReducer(initialState.isLoggedIn).handleType(
  actionNames.setUserActionName,
  () => true
);
const loading = createReducer(initialState.loading);
const error = createReducer(initialState.error).handleType(
  actionNames.sendUserToAuthErrorActionName,
  (_: TState, { payload }: { payload: TError }) => payload
);
const errorValidation = createReducer(initialState.errorValidation); //TODO Объеденить в общую ошибку в виде строки?

/* const user = createReducer(initialState.user)
  .handleType(actionNames.userToAuthRequest, () => initialState.user)
  .handleType(actionNames.setAuthUserRequest, () => initialState.user)
  .handleType(
    actionNames.setAuthUserSuccess,
    (_: TState, { payload }: { payload: TUserSerialized }) => payload
  );
 */
// action:{payload: { payload: TUserSerialized }}
//.handleType(actionNames.userToAuthSuccess, () => initialState.user);

/* const user = handleActions<TUser>(
  {
    [typeof fetchAuthUserRequest]: () => initialState.user,
    [typeof fetchAuthUserSuccess]: (_, { payload }) => payload,
    [typeof sendUserToAuthRequest]: () => initialState.user,
    [typeof resetAuthUser]: () => initialState.user,
    [typeof setAuthUserError]: () => initialState.user,
    [typeof setAuthUserErrorValidation]: () => initialState.user,
  },
  initialState.user
); */
/* const isLoggedIn = handleActions<TIsLoggedIn>(
  {
    [typeof fetchAuthUserRequest]: () => initialState.isLoggedIn,
    [typeof fetchAuthUserSuccess]: () => true,
    [typeof setAuthUserError]: () => initialState.isLoggedIn,
    [typeof setAuthUserErrorValidation]: () => initialState.isLoggedIn,
    [typeof resetAuthUser]: () => initialState.isLoggedIn,
  },
  initialState.isLoggedIn
); */
/* const loading = handleActions<TLoading>(
  {
    [typeof fetchAuthUserRequest]: () => true,
    [typeof sendUserToAuthRequest]: () => true,
    [typeof sendUserToRegistrationRequest]: () => true,
    [typeof fetchAuthUserSuccess]: () => initialState.loading,
    [typeof setAuthUserError]: () => initialState.loading,
    [typeof setAuthUserErrorValidation]: () => initialState.loading,
  },
  initialState.loading
); */
/* const error = handleActions<TError>(
  {
    [typeof setAuthUserError]: (_, { payload }) => payload,
    [typeof fetchAuthUserRequest]: () => initialState.error,
    [typeof fetchAuthUserSuccess]: () => initialState.error,
    [typeof sendUserToAuthRequest]: () => initialState.error,
    [typeof sendUserToRegistrationRequest]: () => initialState.error,
    [typeof resetAuthUser]: () => initialState.error,
    [typeof resetAuthUserError]: () => initialState.error,
  },
  initialState.error
); */

/* const errorValidation = handleActions<TErrorValidation>(
  {
    [typeof setAuthUserErrorValidation]: (_, { payload }) => payload,
    [typeof sendUserToAuthRequest]: () => "",
    [typeof sendUserToRegistrationRequest]: () => "",
    [typeof resetAuthUserError]: () => "",
  },
  initialState.errorValidation
); */
export default combineReducers({
  user,
  isLoggedIn,
  loading,
  error,
  errorValidation,
});
