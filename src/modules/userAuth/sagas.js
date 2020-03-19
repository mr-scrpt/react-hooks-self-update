import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  sendUserToAuthRequest,
  sendUserToRegistrationRequest,
  //setAuthUserSuccess,
  //setAuthUserError,
  fetchAuthUserRequest,
  fetchAuthUserSuccess,
  fetchAuthUserError,
  putUserAuthRequest,
  putUserAuthSuccess,
  putUserAuthError
} from "./actions";

import {
  sendUserToAuthorization,
  sendUserToRegistration,
  getUserAuth,
  putUserAuth
} from "./api";

import { serializedUser } from "helpers/serializedUser";
import { localStorageUse } from "helpers/localStorageUse";
const [, setToken] = localStorageUse("token");
function* fetchWatcher() {
  yield takeLatest(sendUserToRegistrationRequest, setUserRegistrationAPI);
  yield takeLatest(sendUserToAuthRequest, setUserAuthAPI);
  yield takeLatest(fetchAuthUserRequest, fetchUserAuthAPI);
  yield takeLatest(putUserAuthRequest, putUserAuthAPI);
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

export function* putUserAuthAPI({ payload }) {
  try {
    const userResponse = yield call(putUserAuth, payload);
    yield put(putUserAuthSuccess(userResponse));
  } catch (error) {
    yield put(putUserAuthError(error));
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
