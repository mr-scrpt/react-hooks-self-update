import { fork, takeLatest, call, put } from "redux-saga/effects";
import {
  fetchFeedsFollowRequest,
  fetchFeedsFollowSuccess,
  fetchFeedsFollowError,
  fetchLikeFeedRequest,
  fetchLikeFeedSuccess,
  fetchLikeFeedError
} from "./actions";
import { getFeeds } from "./api";
import { togglelikeFeed } from "modules/feedEditor";

function* fetchWatcher() {
  yield takeLatest(fetchFeedsFollowRequest, getFeedsAPI);
  yield takeLatest(fetchLikeFeedRequest, likeFeedAPI);
}

export function* getFeedsAPI({ payload }) {
  try {
    const feedsResponseFollow = yield call(getFeeds, payload);
    yield put(fetchFeedsFollowSuccess(feedsResponseFollow));
  } catch (error) {
    yield put(fetchFeedsFollowError(error));
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
