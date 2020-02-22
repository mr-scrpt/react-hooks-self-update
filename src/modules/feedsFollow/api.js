import { request } from "helpers/request";
import { stringify } from "query-string";

export const getFeeds = async ({ limit, offset }) => {
  const stingifyParams = stringify({
    limit,
    offset
  });
  try {
    return await request(
      {
        url: `/articles/feed?${stingifyParams}`,
        method: "GET"
      },
      true
    );
  } catch (e) {
    throw { status: 400, message: "Ошибка получения данных" };
  }
};
