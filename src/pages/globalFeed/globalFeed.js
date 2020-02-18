import React, { useEffect, useState } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';

import { fetchFeedsGlobalRequest } from 'modules/feedsGlobal';
import { FeedToggler } from 'components/feedToggler';
import { ShowLoading } from 'components/showLoading';
import { ShowErrors } from 'components/showErrors';
import { Feeds } from 'components/feeds';
import { Pagination } from 'components/pagination';
import { PopularTags } from 'components/popularTags';
import { getPaginators } from 'helpers/getPaginators';
import { limit } from 'constant';
const Page = ({ feedsList, loading, error, fetchFeedsGlobalRequest, match: { url }, location: { search } }) => {

  const { currentPage, offset } = getPaginators(search);
  //const [feedsListState, setFeedsListState] = useState(null);

  useEffect(() => {
    if (!fetchFeedsGlobalRequest) return;
    fetchFeedsGlobalRequest({ limit, offset })

  }, [fetchFeedsGlobalRequest, currentPage]);

  /*  useEffect(() => {
     if (!feedsList) return;
     setFeedsListState(feedsList.data)
   }, [feedsList]); */


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
            <FeedToggler />

            <ShowLoading loading={loading} />
            <ShowErrors errors={error} />

            {feedsList && feedsList.data && !loading && (
              <>
                <Feeds articles={feedsList.data.articles} />
                <Pagination total={feedsList.data.articlesCount} limit={limit} url={url} currentPage={currentPage} />
              </>
            )
            }
          </div>
          <div className="col-md-3">
            <PopularTags search={search} />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ feedsGlobalStore }) => feedsGlobalStore;
const mapDispatchToProps = {
  fetchFeedsGlobalRequest
};


export const GlobalFeed = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Page);