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
import { ArticleForm } from "components/articleForm";
import { useFetch } from "hooks/useFetch";
import { Redirect } from "react-router-dom";
/* import { CurrentUserContext } from "contexts/currentUserContext"; */

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
  console.log(beEdited);

  if (beEdited) {
    return <Redirect to={`/articles/${slug}`} />;
  }

  return (
    <ArticleForm onSubmit={handleSubmit} errors={error} initialValues={feed} />
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

/*  const slug = match.params.slug;
  const apiURL = `articles/${slug}`;
  const [{ response: fetchArticleResponse }, doFetchArticle] = useFetch(apiURL);
  const [
    { response: updateArticleResponse, updateArticleError },
    doUpdateArticle
  ] = useFetch(apiURL);
  const [initialValues, setInitialValues] = useState(null);
  const [isSuccessfullSubmit, setIsSuccessefullSubmit] = useState(false);
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentAuthorName, setCurrentAuthorName] = useState("");
  const [currentUserState] = useContext(CurrentUserContext);

  useEffect(() => {
    doFetchArticle();
  }, [doFetchArticle]);

  useEffect(() => {
    if (!fetchArticleResponse) return;

    setInitialValues({
      title: fetchArticleResponse.article.title,
      description: fetchArticleResponse.article.description,
      body: fetchArticleResponse.article.body,
      tagList: fetchArticleResponse.article.tagList
    });
    setCurrentAuthorName(fetchArticleResponse.article.author.username);
  }, [fetchArticleResponse]);

  useEffect(() => {
    if (!updateArticleResponse) return;
    setIsSuccessefullSubmit(true);
  }, [updateArticleResponse]);

  useEffect(() => {
    if (currentUserState && currentUserState.currentUser) {
      setCurrentUserName(currentUserState.currentUser.username);
    }
  }, [currentUserState]);

  const handleSubmit = article => {
    doUpdateArticle({
      method: "PUT",
      data: { article }
    });
  };

  if (isSuccessfullSubmit) {
    return <Redirect to={`/articles/${slug}`} />;
  }

  if (
    currentAuthorName !== "" &&
    currentUserName !== "" &&
    currentAuthorName !== currentUserName
  ) {
    return <Redirect to={`/articles/${slug}`} />;
  } */
