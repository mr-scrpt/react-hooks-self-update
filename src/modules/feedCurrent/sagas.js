import { fork, takeLatest, call, put } from "redux-saga/effects";
import {
  fetchFeedCurrentRequest,
  fetchFeedCurrentSuccess,
  fetchFeedCurrentError
} from "./actions";
import { getFeedCurrent } from "./api";

function* fetchWatcher() {
  yield takeLatest(fetchFeedCurrentRequest, getFeedCurrentDB);
}

export function* getFeedCurrentDB({ payload }) {
  try {
    const feedCurrentResponse = yield call(getFeedCurrent, payload);
    yield put(fetchFeedCurrentSuccess(feedCurrentResponse));
  } catch (error) {
    yield put(fetchFeedCurrentError(error.message));
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
