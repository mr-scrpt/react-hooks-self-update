import { fork, takeLatest, call, put } from "redux-saga/effects";
import {
  fetchFeedCurrentRequest,
  fetchFeedCurrentSuccess,
  fetchFeedCurrentError,
  deleteFeedCurrentRequest,
  deleteFeedCurrentSuccess,
  deleteFeedCurrentError
} from "./actions";
import { getFeedCurrent, deleteFeedCurrent } from "./api";

function* fetchWatcher() {
  yield takeLatest(fetchFeedCurrentRequest, getFeedCurrentDB);
  //yield takeEvery(deleteFeedCurrentRequest, deleteFeedCurrentDB);
}

export function* getFeedCurrentDB({ payload }) {
  try {
    const feedCurrentResponse = yield call(getFeedCurrent, payload);
    yield put(fetchFeedCurrentSuccess(feedCurrentResponse));
  } catch (error) {
    yield put(fetchFeedCurrentError(error));
  }
}

export function* deleteFeedCurrentDB({ payload }) {
  try {
    const feedCurrentResponse = yield call(deleteFeedCurrent, payload);
    yield put(deleteFeedCurrentSuccess(feedCurrentResponse));
  } catch (error) {
    yield put(deleteFeedCurrentError(error));
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
