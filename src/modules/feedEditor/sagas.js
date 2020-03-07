import { fork, takeLatest, call, put } from "redux-saga/effects";

import {
  createFeedEditorRequest,
  createFeedEditorSuccess,
  createFeedEditorError,
  fetchFeedEditorRequest,
  fetchFeedEditorSuccess,
  fetchFeedEditorError,
  deleteFeedEditorRequest,
  deleteFeedEditorSuccess,
  deleteFeedEditorError,
  putFeedEditorRequest,
  putFeedEditorSuccess,
  putFeedEditorError
} from "./actions";

import { createFeed, getFeed, deleteFeed, putFeed } from "./api";

function* fetchWatcher() {
  yield takeLatest(createFeedEditorRequest, createFeedAPI);
  yield takeLatest(fetchFeedEditorRequest, getFeedAPI);
  yield takeLatest(deleteFeedEditorRequest, deleteFeedAPI);
  yield takeLatest(putFeedEditorRequest, putFeedAPI);
}

export function* createFeedAPI({ payload }) {
  try {
    const feedNewResponse = yield call(createFeed, payload);
    yield put(createFeedEditorSuccess(feedNewResponse));
  } catch (error) {
    yield put(createFeedEditorError(error));
  }
}

export function* getFeedAPI({ payload }) {
  try {
    const feedGetResponse = yield call(getFeed, payload);
    yield put(fetchFeedEditorSuccess(feedGetResponse));
  } catch (error) {
    yield put(fetchFeedEditorError(error));
  }
}

export function* deleteFeedAPI({ payload }) {
  try {
    const feedDeleteResponse = yield call(deleteFeed, payload);
    yield put(deleteFeedEditorSuccess(feedDeleteResponse));
  } catch (error) {
    yield put(deleteFeedEditorError(error));
  }
}

export function* putFeedAPI({ payload }) {
  try {
    const feedPutResponse = yield call(putFeed, payload);
    yield put(putFeedEditorSuccess(feedPutResponse));
  } catch (error) {
    yield put(putFeedEditorError(error));
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
