import axios from 'axios';
import { stringify } from 'query-string';
import { baseURL } from 'constant';


export const getFeeds = async ({ limit, offset, tagName: tag }) => {

  const stingifyParams = stringify({
    limit, offset, tag
  })

  try {
    return await axios(`${baseURL}articles?${stingifyParams}`);
  } catch (error) {
    throw { status: 400, message: "Ошибка получения данных" };
  }

}