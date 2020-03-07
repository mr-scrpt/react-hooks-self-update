import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  fetchTagsPopularRequest,
  fetchTagsPopularSuccess,
  fetchTagsPopularError
} from "./actions";
import { getTagsPopular } from "./api";

function* fetchWatcher() {
  yield takeLatest(fetchTagsPopularRequest, getTagsPopularDB);
}

export function* getTagsPopularDB() {
  try {
    const tagsPopularResponse = yield call(getTagsPopular);
    yield put(fetchTagsPopularSuccess(tagsPopularResponse));
  } catch (error) {
    yield put(fetchTagsPopularError(error));
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
