import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormArticleLayout } from "components/formArticle";

import {
  createFeedEditorRequest,
  resetBeCreated,
  resetError,
  getFeed,
  getFeedError,
  getFeedErrorValidation,
  getBeCreated
} from "modules/feedEditor";

const Component = ({
  createFeedEditorRequest,
  resetBeCreated,
  error,
  errorsServer,
  resetError,
  feed,
  beCreated
}) => {
  const [redirectTo, setRedirectTo] = useState("");
  const [submited, setSubmited] = useState(false);

  const onSubmit = async feed => {
    feed.tagList = feed.tagList.split(" ");
    createFeedEditorRequest(feed);
    setSubmited(true);
  };

  useEffect(() => {
    return () => {
      resetBeCreated();
      resetError();
    };
  }, [resetBeCreated, resetError]);

  useEffect(() => {
    if (beCreated && submited) {
      setRedirectTo(feed.slug);
    }
  }, [feed, beCreated]);

  if (redirectTo !== "") {
    return <Redirect to={`/articles/${redirectTo}`} />;
  }

  return (
    <FormArticleLayout
      onSubmit={onSubmit}
      errorsServer={errorsServer}
      error={error}
    />
  );
};

const mapStateToProps = state => ({
  feed: getFeed(state),
  error: getFeedError(state),
  errorsServer: getFeedErrorValidation(state),
  beCreated: getBeCreated(state)
});
const mapDispatchToProps = {
  createFeedEditorRequest,
  resetBeCreated,
  resetError
};
export const CreateArticle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
