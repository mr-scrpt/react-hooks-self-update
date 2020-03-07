import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";

import feedsGlobalStore, { feedsGlobalSaga } from "modules/feedsGlobal";
import feedsFollowStore, { feedsFollowSaga } from "modules/feedsFollow";
import feedsTagsStore, { feedsTagsSaga } from "modules/feedsTags";
import feedEditorStore, { feedEditorSaga } from "modules/feedEditor";
import tagsPopularStore, { tagsPopularSaga } from "modules/tagsPopular";

export default combineReducers({
  feedsGlobalStore,
  feedsFollowStore,
  feedsTagsStore,
  feedEditorStore,
  tagsPopularStore
});

export function* rootSaga() {
  yield fork(feedsGlobalSaga);
  yield fork(feedsFollowSaga);
  yield fork(feedsTagsSaga);
  yield fork(feedEditorSaga);
  yield fork(tagsPopularSaga);
}
