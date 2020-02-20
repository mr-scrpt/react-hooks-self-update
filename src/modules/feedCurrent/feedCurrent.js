import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import {
  fetchFeedCurrentRequest,
  fetchFeedCurrentSuccess,
  fetchFeedCurrentError,
  deleteFeedCurrentRequest,
  deleteFeedCurrentSuccess,
  deleteFeedCurrentError
} from "./actions";

const feedCurrent = handleActions(
  {
    [fetchFeedCurrentRequest]: () => {},
    [fetchFeedCurrentSuccess]: (_, { payload }) => {
      const {
        title,
        body,
        tagList,
        description,
        author,
        favirited,
        faviritedCount,
        createdAt
      } = payload.data.article;

      return {
        title,
        body,
        tagList,
        description,
        author,
        favirited,
        faviritedCount,
        createdAt
      };
    },
    [fetchFeedCurrentError]: () => {},
    [deleteFeedCurrentSuccess]: () => {}
  },
  {}
);

const loading = handleActions(
  {
    [fetchFeedCurrentRequest]: () => true,
    [fetchFeedCurrentSuccess]: () => false,
    [fetchFeedCurrentError]: () => false,
    [deleteFeedCurrentRequest]: () => true
  },
  false
);

const error = handleActions(
  {
    [fetchFeedCurrentRequest]: () => {},
    [fetchFeedCurrentSuccess]: () => {},
    [fetchFeedCurrentError]: (_, { payload }) => payload,
    [deleteFeedCurrentError]: (_, { payload }) => payload
  },
  {}
);

const loadedIs = handleActions(
  {
    [fetchFeedCurrentSuccess]: () => true,
    [fetchFeedCurrentError]: () => true,
    [deleteFeedCurrentSuccess]: () => false
  },
  null
);

export default combineReducers({ feedCurrent, loading, error, loadedIs });
