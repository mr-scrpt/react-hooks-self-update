// Core
import { SagaIterator } from "@redux-saga/core";
import { takeEvery, all, call } from "redux-saga/effects";

//Types
import { FEEDS_GLOBAL_REQUEST } from "@md/feedsGlobal/actionTypes";

//Workers
import { fetchFeedListGlobal } from "@md/feedsGlobal/workers";

function* watchFetchFeedListGlobal(): SagaIterator {
  yield takeEvery(FEEDS_GLOBAL_REQUEST, fetchFeedListGlobal);
}
export function* watchFeedListGlobal(): SagaIterator {
  yield all([call(watchFetchFeedListGlobal)]);
}
