import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { fetchFeedsSelfRequest } from 'modules/feedsSelf';

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


const Component = ({ feedsList, loading, error, fetchFeedsSelfRequest, location: { search }, match: { url, params: { tagName } } }) => {

  useEffect(() => {
    if (!fetchFeedsSelfRequest) return;
    fetchFeedsSelfRequest({ limit: 10, offset })
  }, [fetchFeedsSelfRequest]);

  const { currentPage, offset } = getPaginators(search);

  const stingifyParams = stringify({
    limit, offset, tag: tagName
  })

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
            <ShowLoading loading={loading} />
            <ShowErrors errors={error} />

            {feedsList && feedsList.data && !loading && (
              <>
                <Feeds articles={feedsList.data.articles} />
                <Pagination total={feedsList.data.articlesCount} limit={limit} url={url} currentPage={currentPage} />
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
const mapStateToProps = ({ feedsSelfStore }) => feedsSelfStore;
const mapDispatchToProps = {
  fetchFeedsSelfRequest
}

export const SelfFeed = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Component)