import axios, { AxiosRequestConfig, AxiosResponse, AxiosPromise } from "axios";

import { baseURL } from "constant";
import { localStorageUse } from "helpers/localStorageUse";

const instance = axios.create({ baseURL });
const [token] = localStorageUse("token");

export interface IRequestBody {
  url: string;
  method: string;
  headers: object;
  data: object;
}
type TMethod =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";
export const request = (
  { url, method, data }: { url: string; method: TMethod; data?: object },
  autorized: boolean
) =>
  new Promise(async (resolve, reject) => {
    const requestBody: AxiosRequestConfig = {
      url,
      method,
      headers: autorized
        ? { authorization: token ? `Token ${token}` : "" }
        : {},
      data: data || {},
    };

    try {
      const result: AxiosResponse = await instance(requestBody);
      if (result.status !== 200) {
        //throw new Error(result);
        reject(result); // ? или return?
      }
      resolve(result);
    } catch (e) {
      if (e.response) {
        const eStatus: number = e.response.status || 404;
        const eResponse: string = e.response.data.errors; //??
        /* console.group(`Error from: ${url}`);
        console.info(`Status: ${eStatus}`); */
        //console.dir(eResponse);
        /* console.groupEnd(); */
        console.log("rquest helper", e.response);
        switch (eStatus) {
          case 401:
          case 403:
          case 404:
            return reject("Запрос не обработан, урл ненайден");
          case 422:
            return reject(eResponse);
          case 500:
          case 502:
          case 503:
            return reject("Ошибка сервера");
          default:
            return reject("Неизвестная ошибка сервера");
        }
      } else {
        return reject(e.message);
      }
    }
  });
