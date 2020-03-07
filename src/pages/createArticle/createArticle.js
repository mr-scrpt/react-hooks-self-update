import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { ArticleForm } from "components/articleForm";

import {
  createFeedEditorRequest,
  resetBeCreated,
  getFeed,
  getFeedError,
  getBeCreated
} from "modules/feedEditor";

const Component = ({
  createFeedEditorRequest,
  resetBeCreated,
  feed,
  error,
  beCreated
}) => {
  const [redirectTo, setRedirectTo] = useState("");
  const [submited, setSubmited] = useState(false);

  const onSubmit = async feed => {
    createFeedEditorRequest(feed);
    setSubmited(true);
  };
  useEffect(() => {
    return () => resetBeCreated();
  }, [resetBeCreated]);
  useEffect(() => {
    if (!beCreated && !submited) return;
    setRedirectTo(feed.slug);
  }, [feed, beCreated]);

  if (redirectTo !== "") {
    return <Redirect to={`/articles/${redirectTo}`} />;
  }

  return (
    <>
      <ArticleForm onSubmit={onSubmit} error={error} initialValues={{}} />
    </>
  );
};

const mapStateToProps = state => ({
  feed: getFeed(state),
  error: getFeedError(state),
  beCreated: getBeCreated(state)
});
const mapDispatchToProps = {
  createFeedEditorRequest,
  resetBeCreated
};
export const CreateArticle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
