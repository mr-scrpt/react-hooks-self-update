import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";

import userCurrentStore, { userCurrentSaga } from "modules/userCurrent";
import feedsGlobalStore, { feedsGlobalSaga } from "modules/feedsGlobal";
import feedsFollowStore, { feedsFollowSaga } from "modules/feedsFollow";
import feedsTagsStore, { feedsTagsSaga } from "modules/feedsTags";
import feedEditorStore, { feedEditorSaga } from "modules/feedEditor";
import tagsPopularStore, { tagsPopularSaga } from "modules/tagsPopular";
import userProfileStore, { userProfileSaga } from "modules/userProfile";

export default combineReducers({
  userCurrentStore,
  feedsGlobalStore,
  feedsFollowStore,
  feedsTagsStore,
  feedEditorStore,
  tagsPopularStore,
  userProfileStore
});

export function* rootSaga() {
  yield fork(userCurrentSaga);
  yield fork(feedsGlobalSaga);
  yield fork(feedsFollowSaga);
  yield fork(feedsTagsSaga);
  yield fork(feedEditorSaga);
  yield fork(tagsPopularSaga);
  yield fork(userProfileSaga);
}
