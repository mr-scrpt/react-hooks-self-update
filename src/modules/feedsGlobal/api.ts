// Core
import { stringify } from "query-string";

// Helpers
import { request } from "helpers/request";

// Types
import {
  FeedsListType,
  FeedsListRequestParamsType,
} from "@md/feedsGlobal/types";

import { RequestParamsType } from "@tp/index";

type TResponseFeedsList = {
  data: TResponseFeed;
};
type TResponseFeed = {
  articles: FeedsListType; //TODO добавить тип юзера
};
export const getFeeds = async (
  params?: FeedsListRequestParamsType
): Promise<FeedsListType> => {
  try {
    //if (!params) return Promise.reject("Уточните параметры запроса!");
    //const { limit = 10, offset = 0 } = params;
    const limit = 10,
      offset = 0;
    const stingifyParams = stringify({
      limit,
      offset,
    });
    const res = <TResponseFeedsList>await request(
      {
        url: `/articles?${stingifyParams}`,
        method: "GET",
      },
      true
    );
    console.log("-> res", res);
    return res.data.articles;
  } catch (error) {
    return Promise.reject("Ошибка получения фидов");
  }
};

type TResponseFeedsCount = {
  data: TResponseFeedCount;
};
type TResponseFeedCount = {
  articlesCount: number; //TODO добавить тип юзера
};
export const getFeedsCount = async (): Promise<number> => {
  try {
    const res = <TResponseFeedsCount>await request(
      {
        url: `/articles`,
        method: "GET",
      },
      true
    );

    return res.data.articlesCount;
  } catch (e) {
    return Promise.reject("Ошибка получения количества фидов");
  }
};
