import React, { useEffect, useState } from 'react';
import { Feeds } from 'components/feeds';
import { useFetch } from 'hooks/useFetch';
import { Pagination } from 'components/pagination';
import { getPaginators } from 'helpers/getPaginators';
import { limit } from 'constant';
import { stringify } from 'query-string';
import { PopularTags } from 'components/popularTags';
import { ShowLoading } from 'components/showLoading';
import { ShowErrors } from 'components/showErrors';
import { FeedToggler } from 'components/feedToggler';

export const SelfFeed = ({ location: { search }, match: { url, params: { tagName } } }) => {
  const { currentPage, offset } = getPaginators(search);
  const [articlesList, setArticlesList] = useState([]);
  const stingifyParams = stringify({
    limit, offset, tag: tagName
  })


  const apiUrl = `articles/feed?${stingifyParams}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);


  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage, tagName])


  useEffect(() => {
    if (!response) return;
    setArticlesList(response.articles);
  }, [response])

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium clone</h1>
          <p>Место для обмена знаниями</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler tagName={tagName} />
            <ShowLoading loading={isLoading} />
            <ShowErrors errors={error} />

            {!isLoading && articlesList && response && (
              <>
                <Feeds articles={articlesList} />
                <Pagination total={response.articlesCount} limit={limit} url={url} currentPage={currentPage} />
              </>
            )}
          </div>
          <div className="col-md-3">
            <PopularTags search={search} />
          </div>
        </div>
      </div>
    </div>
  )

}
