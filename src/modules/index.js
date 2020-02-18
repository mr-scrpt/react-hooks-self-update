import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';

import feedsGlobalStore, { feedsGlobalSaga } from 'modules/feedsGlobal';
import feedsSelfStore, { feedsSelfSaga } from 'modules/feedsSelf';
import tagsPopularStore, { tagsPopularSaga } from 'modules/tagsPopular';
import feedsTagsStore, { feedsTagsSaga } from 'modules/feedsTags';

export default combineReducers({ feedsGlobalStore, feedsSelfStore, feedsTagsStore, tagsPopularStore });

export function* rootSaga() {
  yield fork(feedsGlobalSaga);
  yield fork(feedsSelfSaga);
  yield fork(feedsTagsSaga);
  yield fork(tagsPopularSaga);

}
