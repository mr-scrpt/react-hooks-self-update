import { takeLatest, select, fork, takeEvery, call, put } from 'redux-saga/effects';
import { fetchFeedsRequest, fetchFeedsSuccess, fetchFeedsError } from './actions';
import { getFeeds } from './api';

function* fetchWatcher() {
  yield takeEvery(fetchFeedsRequest, getFeedsDB);
}

export function* getFeedsDB({ payload }) {


  try {
    const feedsResponse = yield call(getFeeds, payload); //  limit = 10, offset = 0
    yield put(fetchFeedsSuccess(feedsResponse))
  } catch (error) {
    yield put(fetchFeedsError(error))
  }
}

export default function* () {
  yield fork(fetchWatcher)
}