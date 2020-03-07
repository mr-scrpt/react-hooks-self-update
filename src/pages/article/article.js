import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { isEmptyObject } from "helpers/isEmptyObject";

import {
  fetchFeedEditorRequest,
  getFeed,
  getFeedError,
  getFeedLoading,
  getBeDeleted,
  deleteFeedEditorRequest,
  clearFeed,
  resetBeDeleted
} from "modules/feedEditor";

import { ArticleInfo } from "components/articleInfo";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";
import { Redirect } from "react-router-dom";

const Component = ({
  feed,
  loading,
  error,
  beDeleted,
  fetchFeedEditorRequest,
  deleteFeedEditorRequest,
  clearFeed,
  resetBeDeleted,
  match
}) => {
  const slug = match.params.slug;

  useEffect(() => {
    if (!fetchFeedEditorRequest) return;
    fetchFeedEditorRequest(slug);
    return () => {
      clearFeed();
      resetBeDeleted();
    };
  }, [fetchFeedEditorRequest]);

  const deleteFeed = () => {
    deleteFeedEditorRequest(slug);
  };

  if (beDeleted && isEmptyObject(feed)) {
    return <Redirect to={"/"} />;
  }

  return (
    <>
      <ShowLoading loading={loading} />
      <ShowErrors errors={error} />

      {!loading && !isEmptyObject(feed) && (
        <ArticleInfo article={feed} slug={slug} articleDelete={deleteFeed} />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  feed: getFeed(state),
  loading: getFeedLoading(state),
  error: getFeedError(state),
  beDeleted: getBeDeleted(state)
});
const mapDispatchToProps = {
  fetchFeedEditorRequest,
  deleteFeedEditorRequest,
  clearFeed,
  resetBeDeleted
};
export const Article = connect(mapStateToProps, mapDispatchToProps)(Component);
