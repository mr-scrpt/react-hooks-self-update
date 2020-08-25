// helpers
import { feedMapListLike } from "helpers/feedMapListLike";
//Types
import { FeedsStateType } from "@md/feedsGlobal/types";
import {
  FeedsActionTypes,
  FEEDS_GLOBAL_FETCHING_START,
  FEEDS_GLOBAL_FETCHING_FINISH,
  FEEDS_GLOBAL_REQUEST,
  FEEDS_GLOBAL_REQUEST_SUCCESS,
  FEEDS_GLOBAL_REQUEST_ERROR,
  FEEDS_GLOBAL_FILL,
} from "@md/feedsGlobal/actionTypes";

const initialState: FeedsStateType = {
  feedsList: [],
  feedsCount: 0,
  loading: false,
  error: false,
};

export const feedFlobalListReducer = (
  state = initialState,
  action: FeedsActionTypes
): FeedsStateType => {
  switch (action.type) {
    case FEEDS_GLOBAL_FETCHING_START:
      return {
        ...state,
        feedsList: [],
        //feedsCount: 0,
        loading: true,
        error: false,
      };

    case FEEDS_GLOBAL_FETCHING_FINISH:
      return {
        ...state,
        loading: false,
        //feedsCount: 0,
        error: false,
      };
    case FEEDS_GLOBAL_REQUEST:
      return state;
    case FEEDS_GLOBAL_REQUEST_SUCCESS:
      return state;
    case FEEDS_GLOBAL_REQUEST_ERROR:
      return {
        ...state,
        //feedsCount: 0,
        loading: false,
        error: {
          ...action.payload,
        },
      };
    case FEEDS_GLOBAL_FILL:
      return {
        ...state,
        feedsList: action.payload,
        //feedsCount: 0,
        loading: false,
        error: false,
      };

    default:
      const x: never = action;
  }
  return state;
};

/* 

const feedsList = createReducer(initialState.feedsList)
  .handleType(actionNames.feedsGlobalRequest, () => initialState.feedsList)
  .handleType(
    actionNames.feedsGlobalSuccess,
    (_: TState, action: TFeedsPayload) => action.payload
  )
  .handleType(actionNames.feedsGlobalError, () => initialState.feedsList);

export type TFeedsCountPayload = {
  payload: number;
};

const feedsCount = createReducer(initialState.feedsCount)
  .handleType(
    actionNames.feedsGlobalCountRequest,
    () => initialState.feedsCount
  )
  .handleType(
    actionNames.feedsGlobalCountSuccess,
    (_: TState, action: TFeedsCountPayload) => action.payload
  )
  .handleType(actionNames.feedsGlobalCountError, () => initialState.feedsCount);

const loading = createReducer(initialState.loading)
  .handleType(actionNames.feedsGlobalRequest, () => true)
  .handleType(actionNames.feedsGlobalSuccess, () => initialState.loading)
  .handleType(actionNames.feedsGlobalError, () => false);

export type TErrorPayload = {
  payload: number;
};

const error = createReducer(initialState.error)
  .handleType(
    actionNames.feedsGlobalError,
    (_: TState, action: TErrorPayload) => action.payload
  )
  .handleType(
    actionNames.feedsGlobalCountError,
    (_: TState, action: TErrorPayload) => action.payload
  );

export default combineReducers({
  feedsList,
  feedsCount,
  loading,
  error,
});
 */
