import { stringify } from "query-string";
import { request } from "helpers/request";
import { TFeedList } from "modules/feedsGlobal";

type TResponseFeedsList = {
  data: TResponseFeed;
};
type TResponseFeed = {
  articles: TFeedList; //TODO добавить тип юзера
};
export const getFeeds = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<TFeedList> => {
  const stingifyParams = stringify({
    limit,
    offset,
  });
  try {
    console.log("-> get feed api");
    const res = <TResponseFeedsList>await request(
      {
        url: `/articles?${stingifyParams}`,
        method: "GET",
      },
      true
    );
    console.log("-> res", res);
    return res.data.articles;
  } catch (e) {
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
