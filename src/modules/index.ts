import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";

import {
  feedFlobalListReducer as feedsGlobal,
  watchFeedListGlobal,
} from "modules/feedsGlobal";
//import userAuthStore, { userAuthSaga } from "modules/userAuth";
/* import userProfileStore, { userProfileSaga } from "modules/userProfile";
import feedsFollowStore, { feedsFollowSaga } from "modules/feedsFollow";
import feedsTagsStore, { feedsTagsSaga } from "modules/feedsTags";
import feedEditorStore, { feedEditorSaga } from "modules/feedEditor";
import tagsPopularStore, { tagsPopularSaga } from "modules/tagsPopular"; */

export const AppState = combineReducers({
  feedsGlobal,
  //userAuthStore,
  /* userProfileStore,  
  feedsFollowStore,
  feedsTagsStore,
  feedEditorStore,
  tagsPopularStore */
});

export default AppState;

export type AppStateType = ReturnType<typeof AppState>;

export function* rootSaga() {
  yield fork(watchFeedListGlobal);
  //yield fork(userAuthSaga);
  /*yield fork(userProfileSaga);
  
  yield fork(feedsFollowSaga);
  yield fork(feedsTagsSaga);
  yield fork(feedEditorSaga);
  yield fork(tagsPopularSaga); */
}
