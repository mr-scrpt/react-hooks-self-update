import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useLocalStorage } from 'hooks/useLocalStorage';
export const useFetch = url => {
  const baseURL = 'https://conduit.productionready.io/api/';
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage('token');

  const doFetch = useCallback(async (options = {}) => {
    setOptions(options);
    setIsLoading(true)
  }, [])

  useEffect(() => {
    let skipGetResponseAfterDestroy = false;

    if (!isLoading) return;

    (async () => {
      try {
        const requestOptins = {
          ...options, ...{
            headers: {
              authorization: token ? `Token ${token}` : ''
            }
          }
        }

        const res = await axios(`${baseURL}${url}`, requestOptins);

        !skipGetResponseAfterDestroy && setResponse(res.data);

      } catch (error) {

        !skipGetResponseAfterDestroy && setError(error.response.data);

      } finally {

        !skipGetResponseAfterDestroy && setIsLoading(false)

      }
    })()


    return () => { skipGetResponseAfterDestroy = true }
  }, [isLoading, options, url, token]);

  return [{
    isLoading, response, error
  }, doFetch]
}

