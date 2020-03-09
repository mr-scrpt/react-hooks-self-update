import { stringify } from "query-string";
import { request } from "helpers/request";

export const getFeeds = async ({ limit, offset }) => {
  const stingifyParams = stringify({
    limit,
    offset
  });
  try {
    return await request(
      {
        url: `/articles?${stingifyParams}`,
        method: "GET"
      },
      true
    );
  } catch (e) {
    throw {
      status: 400,
      message: "Ошибка получения данных"
    };
  }
};
