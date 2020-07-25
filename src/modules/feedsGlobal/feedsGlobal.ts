import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { createReducer, ActionType } from "typesafe-actions";
import { feedMapListLike } from "helpers/feedMapListLike";

import * as actionNames from "constant/actionNames";

const initialState = {
  feedsList: [],
  feedsCount: 0,
  loading: false,
  error: "",
};
export type TState = Readonly<typeof initialState>;

export type TFeedsPayload = {
  payload: TFeedList;
};
export type TFeedList = Array<TFeed>;
export type TFeed = {
  author: TAuthor;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: Array<string>;
  title: string;
  updatedAt: string;
};
export type TAuthor = {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
};
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
