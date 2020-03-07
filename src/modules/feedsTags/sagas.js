import { fork, takeLatest, call, put } from "redux-saga/effects";
import {
  fetchFeedsTagsRequest,
  fetchFeedsTagsSuccess,
  fetchFeedsTagsError
} from "./actions";
import { getFeeds } from "./api";

function* fetchWatcher() {
  yield takeLatest(fetchFeedsTagsRequest, getFeedsDB);
}

export function* getFeedsDB({ payload }) {
  console.log(payload);

  try {
    const feedsResponseSelf = yield call(getFeeds, payload);
    yield put(fetchFeedsTagsSuccess(feedsResponseSelf));
  } catch (error) {
    yield put(fetchFeedsTagsError(error));
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
