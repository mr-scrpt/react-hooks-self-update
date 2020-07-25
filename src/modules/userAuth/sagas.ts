import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  sendUserToAuthRequest,
  sendUserToRegistrationRequest,
  fetchAuthUserRequest,
  fetchAuthUserSuccess,
  putAuthUserRequest,
  setAuthUserError,
  setAuthUserErrorValidation,
} from "./actions";

import {
  sendUserToAuthorization,
  sendUserToRegistration,
  getUserAuth,
  putUserAuth,
} from "./api";

import { serializedUser } from "helpers/serializedUser";
import { localStorageUse } from "helpers/localStorageUse";
const [, setToken] = localStorageUse("token");
function* fetchWatcher() {
  yield takeLatest(sendUserToRegistrationRequest, setUserRegistrationAPI);
  yield takeLatest(sendUserToAuthRequest, setUserAuthAPI);
  yield takeLatest(fetchAuthUserRequest, fetchUserAuthAPI);
  yield takeLatest(putAuthUserRequest, putUserAuthAPI);
}

export function* setUserRegistrationAPI({ payload }: { payload: object }) {
  try {
    const userResponse = yield call(sendUserToRegistration, payload);
    setToken(userResponse.data.user.token);
    yield put(fetchAuthUserSuccess(serializedUser(userResponse)));
  } catch (error) {
    yield put(setAuthUserError(error));
  }
}

export function* setUserAuthAPI({ payload }: { payload: object }) {
  try {
    const userResponse = yield call(sendUserToAuthorization, payload);
    setToken(userResponse.data.user.token);
    yield put(fetchAuthUserSuccess(serializedUser(userResponse)));
  } catch (error) {
    yield put(setAuthUserError(error));
  }
}

export function* fetchUserAuthAPI() {
  try {
    const userResponse = yield call(getUserAuth);
    yield put(fetchAuthUserSuccess(userResponse));
  } catch (error) {
    yield put(setAuthUserError(error));
  }
}

export function* putUserAuthAPI({ payload }: { payload: object }) {
  try {
    const userResponse = yield call(putUserAuth, payload);
    yield put(fetchAuthUserSuccess(userResponse));
  } catch (error) {
    yield put(setAuthUserError(error));
  }
}

export default function* () {
  yield fork(fetchWatcher);
}
