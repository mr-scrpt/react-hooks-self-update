import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  fetchAuthUserRequest,
  fetchAuthUserSuccess,
  fetchAuthUserError
} from "./actions";

import { getUserAuth } from "./api";

function* fetchWatcher() {
  yield takeLatest(fetchAuthUserRequest, getUserAuthAPI);
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
