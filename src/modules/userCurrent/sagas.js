import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserError
} from "./actions";

import { getUserCurrent } from "./api";

function* fetchWatcher() {
  yield takeLatest(fetchCurrentUserRequest, getUserCurrentAPI);
}

export function* getUserCurrentAPI() {
  try {
    const userResponse = yield call(getUserCurrent);
    console.log("user", userResponse);

    yield put(fetchCurrentUserSuccess(userResponse));
  } catch (error) {
    yield put(fetchCurrentUserError(error));
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
