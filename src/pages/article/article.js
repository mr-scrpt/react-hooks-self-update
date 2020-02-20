import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { isEmptyObject } from 'helpers/isEmptyObject';
import { fetchFeedCurrentRequest, deleteFeedCurrentRequest, getCurretnFeed, getFeedLoading, getFeedError } from 'modules/feedCurrent';

import { ArticleInfo } from 'components/articleInfo';
import { ShowLoading } from 'components/showLoading';
import { ShowErrors } from 'components/showErrors';
import { Redirect } from 'react-router-dom';

const Component = ({ feedCurrent, loading, loadedIs, error, fetchFeedCurrentRequest, deleteFeedCurrentRequest, match }) => {

  const slug = match.params.slug;
  /* console.log('error on component', feedCurrent);
  console.log();
 */
  isEmptyObject(error)
  useEffect(() => {
    if (!fetchFeedCurrentRequest) return;
    fetchFeedCurrentRequest(slug)
  }, [fetchFeedCurrentRequest]);

  const deleteFeedCurrent = () => {
    deleteFeedCurrentRequest(slug);
  }

  if (loadedIs === false) {
    return <Redirect to={'/'} />
  }


  return (
    <>
      <ShowLoading loading={loading} />
      <ShowErrors errors={error} />

      {!loading && !isEmptyObject(feedCurrent) && (
        <ArticleInfo article={feedCurrent} slug={slug} articleDelete={deleteFeedCurrent} />

      )}
    </>

  )
}

const mapStateToProps = state => ({
  feedCurrent: getCurretnFeed(state),
  loading: getFeedLoading(state),
  error: getFeedError(state)
});
const mapDispatchToProps = {
  fetchFeedCurrentRequest,
  deleteFeedCurrentRequest
}
export const Article = connect(mapStateToProps, mapDispatchToProps)(Component)