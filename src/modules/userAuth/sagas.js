import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  sendUserToAuthRequest,
  sendUserToRegistrationRequest,
  //setAuthUserSuccess,
  //setAuthUserError,
  fetchAuthUserRequest,
  fetchAuthUserSuccess,
  fetchAuthUserError
} from "./actions";

import {
  sendUserToAuthorization,
  sendUserToRegistration,
  getUserAuth
} from "./api";

import { serializedUser } from "helpers/serializedUser";
import { localStorageUse } from "helpers/localStorageUse";
const [, setToken] = localStorageUse("token");
function* fetchWatcher() {
  yield takeLatest(sendUserToRegistrationRequest, setUserRegistrationAPI);
  yield takeLatest(sendUserToAuthRequest, setUserAuthAPI);
  yield takeLatest(fetchAuthUserRequest, fetchUserAuthAPI);
}

export function* setUserRegistrationAPI({ payload }) {
  try {
    const userResponse = yield call(sendUserToRegistration, payload);
    setToken(userResponse.data.user.token);
    yield put(fetchAuthUserSuccess(serializedUser(userResponse)));
  } catch (error) {
    yield put(fetchAuthUserError(error));
  }
}

export function* setUserAuthAPI({ payload }) {
  try {
    const userResponse = yield call(sendUserToAuthorization, payload);
    setToken(userResponse.data.user.token);
    yield put(fetchAuthUserSuccess(serializedUser(userResponse)));
  } catch (error) {
    yield put(fetchAuthUserError(error));
  }
}

export function* fetchUserAuthAPI() {
  try {
    const userResponse = yield call(getUserAuth);

    yield put(fetchAuthUserSuccess(userResponse));
  } catch (error) {
    yield put(fetchAuthUserError(error));
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
