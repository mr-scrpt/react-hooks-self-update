import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";

import feedsGlobalStore, { feedsGlobalSaga } from "modules/feedsGlobal";
import userAuthStore, { userAuthSaga } from "modules/userAuth";
/* import userProfileStore, { userProfileSaga } from "modules/userProfile";
import feedsFollowStore, { feedsFollowSaga } from "modules/feedsFollow";
import feedsTagsStore, { feedsTagsSaga } from "modules/feedsTags";
import feedEditorStore, { feedEditorSaga } from "modules/feedEditor";
import tagsPopularStore, { tagsPopularSaga } from "modules/tagsPopular"; */

export const AppState = combineReducers({
  feedsGlobalStore,
  userAuthStore,
  /* userProfileStore,  
  feedsFollowStore,
  feedsTagsStore,
  feedEditorStore,
  tagsPopularStore */
});

export default AppState;

export type TAppState = ReturnType<typeof AppState>;

export function* rootSaga() {
  yield fork(feedsGlobalSaga);
  yield fork(userAuthSaga);
  /*yield fork(userProfileSaga);
  
  yield fork(feedsFollowSaga);
  yield fork(feedsTagsSaga);
  yield fork(feedEditorSaga);
  yield fork(tagsPopularSaga); */
}
