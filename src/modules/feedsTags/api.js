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
    throw new Error({ status: 400, message: "Ошибка получения данных" });
  }
};
