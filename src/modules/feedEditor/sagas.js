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
  fetchLikeFeedRequest,
  fetchLikeFeedSuccess,
  fetchLikeFeedError,
  putFeedEditorRequest,
  putFeedEditorSuccess,
  putFeedEditorError,
  setAuthorToFollowRequest,
  setAuthorToFollowSuccess,
  setAuthorToFollowError
} from "./actions";

import {
  createFeed,
  fetchFeed,
  deleteFeed,
  putFeed,
  togglelikeFeed,
  toggleFollowAuthor
} from "./api";

function* fetchWatcher() {
  yield takeLatest(createFeedEditorRequest, createFeedAPI);
  yield takeLatest(fetchFeedEditorRequest, fetchFeedAPI);
  yield takeLatest(deleteFeedEditorRequest, deleteFeedAPI);
  yield takeLatest(putFeedEditorRequest, putFeedAPI);
  yield takeLatest(fetchLikeFeedRequest, likeFeedAPI);
  yield takeLatest(setAuthorToFollowRequest, followFeedAPI);
}

export function* createFeedAPI({ payload }) {
  try {
    const feedNewResponse = yield call(createFeed, payload);
    yield put(createFeedEditorSuccess(feedNewResponse));
  } catch (error) {
    yield put(createFeedEditorError(error));
  }
}

export function* fetchFeedAPI({ payload }) {
  try {
    const feedGetResponse = yield call(fetchFeed, payload);
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

export function* likeFeedAPI({ payload }) {
  try {
    yield call(togglelikeFeed, payload);
    yield put(fetchLikeFeedSuccess());
  } catch (error) {
    yield put(fetchLikeFeedError(error));
  }
}

export function* followFeedAPI({ payload }) {
  try {
    yield call(toggleFollowAuthor, payload);
    yield put(setAuthorToFollowSuccess());
  } catch (error) {
    yield put(setAuthorToFollowError(error));
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
