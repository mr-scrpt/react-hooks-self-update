import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { fetchFeedsSelfRequest, fetchFeedsSelfSuccess, fetchFeedsSelfError } from './actions';
import { getFeeds } from './api';

function* fetchWatcher() {
  yield takeEvery(fetchFeedsSelfRequest, getFeedsDB);
}

export function* getFeedsDB({ payload }) {

  try {
    const feedsResponseSelf = yield call(getFeeds, payload); //  limit = 10, offset = 0
    yield put(fetchFeedsSelfSuccess(feedsResponseSelf))
  } catch (error) {
    yield put(fetchFeedsSelfError(error))
  }
}

export default function* () {
  yield fork(fetchWatcher)
}