import axios from 'axios';
import { baseURL } from 'constant';

export const getTagsPopular = async () => {
  try {
    return await axios(`${baseURL}tags`);
  } catch (error) {
    throw { status: 400, message: "Ошибка получения данных" };
  }
}