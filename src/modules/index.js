import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';

import feedsStore, { feedsSaga } from 'modules/feeds';

export default combineReducers({ feedsStore });

export function* rootSaga() {
  yield fork(feedsSaga);
}
