import { stringify } from "query-string";
import { request } from "helpers/request";

export const getFeeds = async ({ limit, offset }) => {
  const stingifyParams = stringify({
    limit,
    offset,
  });
  try {
    return await request(
      {
        url: `/articles?${stingifyParams}`,
        method: "GET",
      },
      true
    );
  } catch (e) {
    return Promise.reject("Ошибка получения фидов");
  }
};

export const getFeedsCount = async () => {
  try {
    return await request(
      {
        url: `/articles`,
        method: "GET",
      },
      true
    );
  } catch (e) {
    return Promise.reject("Ошибка получения количества фидов");
  }
};
