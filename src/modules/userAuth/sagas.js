import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  setAuthUserRequest,
  //setAuthUserSuccess,
  //setAuthUserError,
  fetchAuthUserRequest,
  fetchAuthUserSuccess,
  fetchAuthUserError
} from "./actions";

import { setUserAuth, getUserAuth } from "./api";

import { localStorageUse } from "helpers/localStorageUse";
const [, setToken] = localStorageUse("token");
function* fetchWatcher() {
  yield takeLatest(fetchAuthUserRequest, getUserAuthAPI);
  yield takeLatest(setAuthUserRequest, setUserAuthAPI);
}

export function* setUserAuthAPI({ payload }) {
  try {
    const userResponse = yield call(setUserAuth, payload);
    setToken(userResponse.data.user.token);
    yield put(fetchAuthUserSuccess(userResponse));
  } catch (error) {
    yield put(fetchAuthUserError(error));
  }
}

export function* getUserAuthAPI() {
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
