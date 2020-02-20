import axios from 'axios';

import { baseURL } from 'constant';
import { localStorageUse } from 'helpers/localStorageUse';


const [token] = localStorageUse('token');

const options = {
  headers: {
    authorization: token ? `Token ${token}` : ''
  }
}

export const getFeedCurrent = async (slug) => {

  try {
    return await axios(`${baseURL}articles/${slug}`, options);
  } catch (error) {
    throw { status: 400, message: "Ошибка получения данных" };
  }

}

export const deleteFeedCurrent = async (slug) => {
  options.method = "DELETE";
  try {
    return await axios(`${baseURL}articles/${slug}`, options);
  } catch (error) {
    throw { status: 400, message: "Ошибка получения данных" };
  }
}