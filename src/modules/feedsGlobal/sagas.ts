import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  fetchFeedsGlobalRequest,
  fetchFeedsGlobalSuccess,
  fetchFeedsGlobalError,
  fetchFeedsGlobalCountRequest,
  fetchFeedsGlobalCountSuccess,
  fetchFeedsGlobalCountError,
  fetchLikeFeedRequest,
  fetchLikeFeedSuccess,
  fetchLikeFeedError,
} from "./actions";
import * as actionNames from "constant/actionNames";
import { getFeeds, getFeedsCount } from "./api";
import { throws } from "assert";

//import { togglelikeFeed } from "modules/feedEditor";
function* fetchWatcher() {
  yield takeLatest(actionNames.feedsGlobalRequest, getFeedsAPI);
  yield takeLatest(actionNames.feedsGlobalCountRequest, getFeedsCountAPI);
  /*  yield takeLatest(fetchLikeFeedRequest, likeFeedAPI); */
}

export function* getFeedsAPI(
  action: ReturnType<typeof fetchFeedsGlobalRequest>
) {
  try {
    const feedsResponse = yield call(getFeeds, action.payload);
    yield put(fetchFeedsGlobalSuccess(feedsResponse));
  } catch (error) {
    yield put(fetchFeedsGlobalError(error));
  }
}

export function* getFeedsCountAPI() {
  try {
    const feedsResponse = yield call(getFeedsCount);
    yield put(fetchFeedsGlobalCountSuccess(feedsResponse));
  } catch (error) {
    yield put(fetchFeedsGlobalCountError(error));
  }
}
/*
export function* likeFeedAPI({ payload }: { payload: any }) {
  try {
    //yield call(togglelikeFeed, payload);
    //yield put(fetchLikeFeedSuccess(payload));
  } catch (error) {
    //yield put(fetchLikeFeedError(error));
  }
}
 */
export default function* () {
  yield fork(fetchWatcher);
}
