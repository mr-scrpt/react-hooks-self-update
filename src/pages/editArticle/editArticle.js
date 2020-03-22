import React, { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import {
  fetchFeedEditorRequest,
  putFeedEditorRequest,
  resetBeEdited,
  getFeed,
  getFeedLoading,
  getFeedError,
  getBeEdited
} from "modules/feedEditor";
import { FormArticle } from "components/formArticle";
import { Redirect } from "react-router-dom";

const Component = ({
  match,
  feed,
  error,
  fetchFeedEditorRequest,
  putFeedEditorRequest,
  resetBeEdited,
  beEdited
}) => {
  const slug = match.params.slug;

  useEffect(() => {
    return () => {
      resetBeEdited();
    };
  }, [resetBeEdited]);

  useEffect(() => {
    if (!fetchFeedEditorRequest) return;
    fetchFeedEditorRequest(slug);
  }, [fetchFeedEditorRequest]);

  const handleSubmit = data => {
    data.slug = slug;
    putFeedEditorRequest(data);
  };

  if (beEdited) {
    return <Redirect to={`/articles/${slug}`} />;
  }

  return (
    <FormArticle onSubmit={handleSubmit} errors={error} initialValues={feed} />
  );
};

const mapDispatchToProps = {
  fetchFeedEditorRequest,
  putFeedEditorRequest,
  resetBeEdited
};

const mapStateToProps = state => ({
  feed: getFeed(state),
  loading: getFeedLoading(state),
  error: getFeedError(state),
  beEdited: getBeEdited(state)
});

export const EditArticle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
