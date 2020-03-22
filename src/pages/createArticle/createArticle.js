import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { FormArticle } from "components/formArticle";

import {
  createFeedEditorRequest,
  resetBeCreated,
  resetError,
  getFeed,
  getFeedError,
  getBeCreated
} from "modules/feedEditor";

const Component = ({
  createFeedEditorRequest,
  resetBeCreated,
  resetError,
  feed,
  errorsServer,
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
    <>
      <FormArticle onSubmit={onSubmit} errorsServer={errorsServer} />
    </>
  );
};

const mapStateToProps = state => ({
  feed: getFeed(state),
  errorsServer: getFeedError(state),
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
