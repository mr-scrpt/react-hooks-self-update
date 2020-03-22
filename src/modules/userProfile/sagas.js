import { fork, takeLatest, call, put } from "redux-saga/effects";

import {
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileError,
  fetchUserFeedsRequest,
  fetchUserFeedsSuccess,
  fetchUserFeedsError,
  fetchUserFeedsFavoritedRequest,
  fetchUserFeedsFavoritedSuccess,
  fetchUserFeedsFavoritedError,
  fetchFa
} from "./actions";

import { getUser, getUserFeeds, getUserFeedsFavorited } from "./api";

function* fetchWacher() {
  yield takeLatest(fetchProfileRequest, getUserAPI);
  yield takeLatest(fetchUserFeedsRequest, getUserFeedsAPI);
  yield takeLatest(fetchUserFeedsFavoritedRequest, getUserFeedsFavoritedAPI);
}

export function* getUserAPI({ payload }) {
  try {
    const userResponse = yield call(getUser, payload);
    yield put(fetchProfileSuccess(userResponse));
  } catch (error) {
    yield put(fetchProfileError(error));
  }
}

export function* getUserFeedsAPI({ payload }) {
  try {
    const userFeedsResponse = yield call(getUserFeeds, payload);
    yield put(fetchUserFeedsSuccess(userFeedsResponse));
  } catch (error) {
    yield put(fetchUserFeedsError(error));
  }
}

export function* getUserFeedsFavoritedAPI({ payload }) {
  try {
    const userFeedsFavoritedResponse = yield call(
      getUserFeedsFavorited,
      payload
    );
    yield put(fetchUserFeedsFavoritedSuccess(userFeedsFavoritedResponse));
  } catch (error) {
    yield put(fetchUserFeedsFavoritedError(error));
  }
}
export default function*() {
  yield fork(fetchWacher);
}
