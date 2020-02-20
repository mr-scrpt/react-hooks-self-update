import axios from 'axios';
import { stringify } from 'query-string';

import { baseURL } from 'constant';
import { localStorageUse } from 'helpers/localStorageUse';

export const getFeeds = async ({ limit, offset }) => {


  const [token] = localStorageUse('token');
  const stingifyParams = stringify({
    limit, offset
  })
  const options = {
    headers: {
      authorization: token ? `Token ${token}` : ''
    }
  }

  try {
    return await axios(`${baseURL}articles/feed?${stingifyParams}`, options);
  } catch (error) {
    throw { status: 400, message: "Ошибка получения данных" };
  }

}