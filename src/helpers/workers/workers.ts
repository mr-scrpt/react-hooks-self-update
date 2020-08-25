// Core
import { ActionCreator, AnyAction } from "redux";
import { SagaIterator } from "@redux-saga/core";
import { put, call } from "redux-saga/effects";

// Types
import { FillActionType, ErrorActionType, RequestParamsType } from "@tp/index";

type OptionsType<T, P> = {
  fetcher: (params?: P) => Promise<T>;
  fetcherParam?: P;
  fetchingStart: ActionCreator<AnyAction>;
  fetchingFinish: ActionCreator<AnyAction>;
  fill: FillActionType<T>;
  setErrorAction: ActionCreator<AnyAction>;
};

export function* makeRequestWithSpinner<T, P>(
  options: OptionsType<T, P>
): SagaIterator {
  const {
    fetcher,
    fetcherParam,
    fetchingStart,
    fetchingFinish,
    fill,
    setErrorAction,
  } = options;

  try {
    yield put(fetchingStart());

    const result = yield call(fetcher, fetcherParam);
    yield put(fill(result));
  } catch (error) {
    yield put(setErrorAction(error.message));
  } finally {
    yield put(fetchingFinish());
  }
}
