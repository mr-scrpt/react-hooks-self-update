import React, { useEffect } from 'react';

import { useFetch } from 'hooks/useFetch';
import { getPaginators } from 'helpers/getPaginators';
import { limit } from 'constant';
import { stringify } from 'query-string';
import { Feeds } from 'components/feeds';
import { Pagination } from 'components/pagination';
import { ShowErrors } from 'components/showErrors';
import { ShowLoading } from 'components/showLoading';
const getApiUrl = ({ username, offset, isFavorited }) => {
  const params = isFavorited
    ? { limit, offset, favorited: username }
    : { limit, offset, author: username }
  return `articles?${stringify(params)}`
}

export const UserArticle = ({ username, location, isFavorited, url }) => {
  const { offset, currentPage } = getPaginators(location.search);
  const apiURL = getApiUrl({ username, offset, isFavorited })
  const [{ response, isLoading, error }, doFetch] = useFetch(apiURL);

  useEffect(() => {
    doFetch()
  }, [doFetch, location]);


  return (
    <>
      <ShowLoading loading={isLoading} />
      <ShowErrors errors={error} />
      {
        !isLoading && response && (
          <>
            <Feeds articles={response.articles} />
            <Pagination total={response.articlesCount} limit={limit} url={url} currentPage={currentPage} />
          </>
        )
      }
    </>
  )
}