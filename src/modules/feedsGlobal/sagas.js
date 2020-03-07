import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  fetchFeedsGlobalRequest,
  fetchFeedsGlobalSuccess,
  fetchFeedsGlobalError
} from "./actions";
import { getFeeds } from "./api";

function* fetchWatcher() {
  yield takeLatest(fetchFeedsGlobalRequest, getFeedsDB);
}

export function* getFeedsDB({ payload }) {
  try {
    const feedsResponse = yield call(getFeeds, payload); //  limit = 10, offset = 0
    console.log("global", feedsResponse);
    yield put(fetchFeedsGlobalSuccess(feedsResponse));
  } catch (error) {
    yield put(fetchFeedsGlobalError(error));
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
