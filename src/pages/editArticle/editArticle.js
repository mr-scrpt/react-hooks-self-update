import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchFeedEditorRequest,
  putFeedEditorRequest,
  resetBeEdited,
  getFeed,
  getFeedLoading,
  getFeedError,
  getFeedErrorValidation,
  getBeEdited
} from "modules/feedEditor";
import { FormArticleLayout } from "components/formArticle";
import { Redirect } from "react-router-dom";

const Component = ({
  match,
  feed,
  error,
  errorsServer,
  loading,
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

  const onSubmit = data => {
    data.slug = slug;
    putFeedEditorRequest(data);
  };

  if (beEdited) {
    return <Redirect to={`/articles/${slug}`} />;
  }

  return (
    <FormArticleLayout
      onSubmit={onSubmit}
      errorsServer={errorsServer}
      error={error}
      loading={loading}
      initialValues={feed}
    />
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
  errorsServer: getFeedErrorValidation(state),
  beEdited: getBeEdited(state)
});

export const EditArticle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
