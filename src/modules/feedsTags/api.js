import { request } from "helpers/request";
import { stringify } from "query-string";

export const getFeeds = async ({ limit, offset, tagName: tag }) => {
  const stingifyParams = stringify({ limit, offset, tag });

  try {
    return await request(
      { url: `/articles?${stingifyParams}`, method: "GET" },
      true
    );
  } catch (error) {
    return Promise.reject("Ошибка получения фидов по тэгу");
  }
};

export const getFeedsCount = async ({ limit, offset, tagName: tag }) => {
  const stingifyParams = stringify({ limit, offset, tag });
  try {
    return await request(
      {
        url: `/articles?${stingifyParams}`,
        method: "GET",
      },
      true
    );
  } catch (e) {
    return Promise.reject("Ошибка получения количества фидов");
  }
};
