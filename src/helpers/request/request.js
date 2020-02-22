import axios from "axios";

import { baseURL } from "constant";
import { localStorageUse } from "helpers/localStorageUse";

const instance = axios.create({ baseURL });
const [token] = localStorageUse("token");

export const request = ({ url, method, data }, autorized) =>
  new Promise(async (resolve, reject) => {
    const requestBody = {
      url,
      method,
      headers: autorized
        ? { authorization: token ? `Token ${token}` : "" }
        : {},
      data: data || {}
    };

    try {
      const result = await instance(requestBody);
      if (result.status !== 200) {
        throw new Error(result);
      }
      resolve(result);
    } catch (e) {
      if (e.response) {
        const eStatus = e.response.status || 404;
        const eResponse = e.response.data;

        console.group(`Error from: ${url}`);
        console.info(`Status: ${eStatus}`);
        console.dir(eResponse);
        console.groupEnd();

        /* switch (eStatus) {
          case 401:
          case 403:
          case 404:
            return reject({ details: "Запрос не обработан, урл ненайден" });
          case 500:
          case 502:
          case 503:
            return reject({ details: "Ошибка сервера" });
          default:
            return reject(eResponse);
        } */
      } else {
        return reject(e.message);
      }
    }
  });
