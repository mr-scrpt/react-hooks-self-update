import { fork, takeEvery, call, put } from "redux-saga/effects";
import {
  fetchFeedsFollowRequest,
  fetchFeedsFollowSuccess,
  fetchFeedsFollowError
} from "./actions";
import { getFeeds } from "./api";

function* fetchWatcher() {
  yield takeEvery(fetchFeedsFollowRequest, getFeedsDB);
}

export function* getFeedsDB({ payload }) {
  try {
    const feedsResponseFollow = yield call(getFeeds, payload); //  limit = 10, offset = 0
    yield put(fetchFeedsFollowSuccess(feedsResponseFollow));
  } catch (error) {
    yield put(fetchFeedsFollowError(error));
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
