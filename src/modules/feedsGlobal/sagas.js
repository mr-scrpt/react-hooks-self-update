import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  fetchFeedsGlobalRequest,
  fetchFeedsGlobalSuccess,
  fetchFeedsGlobalError,
  fetchFeedsGlobalCountRequest,
  fetchFeedsGlobalCountSuccess,
  fetchFeedsGlobalCountError,
  fetchLikeFeedRequest,
  fetchLikeFeedSuccess,
  fetchLikeFeedError,
} from "./actions";
import { getFeeds, getFeedsCount } from "./api";
import { togglelikeFeed } from "modules/feedEditor";
function* fetchWatcher() {
  yield takeLatest(fetchFeedsGlobalRequest, getFeedsAPI);
  yield takeLatest(fetchFeedsGlobalCountRequest, getFeedsCountAPI);
  yield takeLatest(fetchLikeFeedRequest, likeFeedAPI);
}

export function* getFeedsAPI({ payload }) {
  try {
    const feedsResponse = yield call(getFeeds, payload);
    yield put(fetchFeedsGlobalSuccess(feedsResponse));
  } catch (error) {
    yield put(fetchFeedsGlobalError(error));
  }
}
export function* getFeedsCountAPI({ payload }) {
  try {
    const feedsResponse = yield call(getFeedsCount, payload);
    yield put(fetchFeedsGlobalCountSuccess(feedsResponse));
  } catch (error) {
    yield put(fetchFeedsGlobalCountError(error));
  }
}
export function* likeFeedAPI({ payload }) {
  try {
    yield call(togglelikeFeed, payload);
    yield put(fetchLikeFeedSuccess(payload));
  } catch (error) {
    yield put(fetchLikeFeedError(error));
  }
}

export default function* () {
  yield fork(fetchWatcher);
}
