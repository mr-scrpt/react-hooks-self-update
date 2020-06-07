import { fork, takeLatest, call, put } from "redux-saga/effects";
import {
  fetchFeedsTagsRequest,
  fetchFeedsTagsSuccess,
  fetchFeedsTagsError,
  fetchFeedsTagsCountRequest,
  fetchFeedsTagsCountSuccess,
  fetchFeedsTagsCountError,
  fetchLikeFeedRequest,
  fetchLikeFeedSuccess,
  fetchLikeFeedError,
} from "./actions";
import { getFeeds, getFeedsCount } from "./api";
import { togglelikeFeed } from "modules/feedEditor";
function* fetchWatcher() {
  yield takeLatest(fetchFeedsTagsRequest, getFeedsAPI);
  yield takeLatest(fetchFeedsTagsCountRequest, getFeedsCountAPI);
  yield takeLatest(fetchLikeFeedRequest, likeFeedAPI);
}

export function* getFeedsAPI({ payload }) {
  try {
    const feedsResponseSelf = yield call(getFeeds, payload);
    yield put(fetchFeedsTagsSuccess(feedsResponseSelf));
  } catch (error) {
    yield put(fetchFeedsTagsError(error));
  }
}
export function* getFeedsCountAPI({ payload }) {
  try {
    const feedsResponse = yield call(getFeedsCount, payload);
    yield put(fetchFeedsTagsCountSuccess(feedsResponse));
  } catch (error) {
    yield put(fetchFeedsTagsCountError(error));
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
