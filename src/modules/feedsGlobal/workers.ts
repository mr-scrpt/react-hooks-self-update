//Actions
import {
  feedsGlobalFetchingStartAction,
  feedsGlobalFetchingFinishAction,
  feedsGlobalFillAction,
  feedsGlobalRequestErrorAction,
} from "@md/feedsGlobal/actions";

// Types
import {
  FeedsListType,
  FeedsListRequestParamsType,
} from "@md/feedsGlobal/types";
import { RequestParamsType } from "@tp/index";
import { makeRequestWithSpinner } from "@hl/workers";

// API
import { getFeeds } from "@md/feedsGlobal/api";

export function* fetchFeedListGlobal(): Generator {
  const options = {
    fetcher: getFeeds,
    //fetcherParam: { limit: "20", offset: "30" },
    fetchingStart: feedsGlobalFetchingStartAction,
    fetchingFinish: feedsGlobalFetchingFinishAction,
    fill: feedsGlobalFillAction,
    setErrorAction: feedsGlobalRequestErrorAction,
  };
  console.log("-> in staga ", 333333333333333333333);
  yield makeRequestWithSpinner<FeedsListType, FeedsListRequestParamsType>(
    options
  );
}
