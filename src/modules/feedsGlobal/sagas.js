import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  fetchFeedsGlobalRequest,
  fetchFeedsGlobalSuccess,
  fetchFeedsGlobalError,
  fetchLikeFeedRequest,
  fetchLikeFeedSuccess,
  fetchLikeFeedError
} from "./actions";
import { getFeeds } from "./api";
import { togglelikeFeed } from "modules/feedEditor";
function* fetchWatcher() {
  yield takeLatest(fetchFeedsGlobalRequest, getFeedsAPI);
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
export function* likeFeedAPI({ payload }) {
  try {
    yield call(togglelikeFeed, payload);
    yield put(fetchLikeFeedSuccess(payload));
  } catch (error) {
    yield put(fetchLikeFeedError(error));
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
