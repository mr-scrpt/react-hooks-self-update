import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";

import feedsGlobalStore, { feedsGlobalSaga } from "modules/feedsGlobal";
import feedsFollowStore, { feedsFollowSaga } from "modules/feedsFollow";
import feedCurrentStore, { feedCurrentSaga } from "modules/feedCurrent";
import feedsTagsStore, { feedsTagsSaga } from "modules/feedsTags";
import tagsPopularStore, { tagsPopularSaga } from "modules/tagsPopular";

export default combineReducers({
  feedsGlobalStore,
  feedsFollowStore,
  feedsTagsStore,
  feedCurrentStore,
  tagsPopularStore
});

export function* rootSaga() {
  yield fork(feedsGlobalSaga);
  yield fork(feedsFollowSaga);
  yield fork(feedsTagsSaga);
  yield fork(feedCurrentSaga);
  yield fork(tagsPopularSaga);
}
