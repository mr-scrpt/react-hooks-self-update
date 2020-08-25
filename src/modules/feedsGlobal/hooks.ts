//Core
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//Types
import {
  FeedsStateType,
  FeedsListRequestParamsType,
} from "@md/feedsGlobal/types";
import { AppStateType } from "@md/index";

// Actions
import { feedsGlobalRequestAction } from "@md/feedsGlobal/actions";

export const useFeedsGlobalFetch = (params: string): FeedsStateType => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(feedsGlobalRequestAction());
  }, [dispatch]);

  const { feedsList, feedsCount, loading, error } = useSelector<
    AppStateType,
    FeedsStateType
  >((state) => state.feedsGlobal);

  return {
    feedsList,
    feedsCount,
    loading,
    error,
  };
};
