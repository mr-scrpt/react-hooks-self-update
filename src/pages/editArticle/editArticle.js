import React, { useEffect, useState, useContext } from 'react';
import { ArticleForm } from 'components/articleForm';
import { useFetch } from 'hooks/useFetch';
import { Redirect } from 'react-router-dom';
import { CurrentUserContext } from 'contexts/currentUserContext';

export const EditArticle = ({ match }) => {
  const slug = match.params.slug;
  const apiURL = `articles/${slug}`;
  const [{ response: fetchArticleResponse }, doFetchArticle] = useFetch(apiURL);
  const [{ response: updateArticleResponse, updateArticleError }, doUpdateArticle] = useFetch(apiURL);
  const [initialValues, setInitialValues] = useState(null);
  const [isSuccessfullSubmit, setIsSuccessefullSubmit] = useState(false);
  const [currentUserName, setCurrentUserName] = useState('');
  const [currentAuthorName, setCurrentAuthorName] = useState('');
  const [currentUserState] = useContext(CurrentUserContext);



  useEffect(() => {
    doFetchArticle()
  }, [doFetchArticle])

  useEffect(() => {
    if (!fetchArticleResponse) return

    setInitialValues({
      title: fetchArticleResponse.article.title,
      description: fetchArticleResponse.article.description,
      body: fetchArticleResponse.article.body,
      tagList: fetchArticleResponse.article.tagList
    })
    setCurrentAuthorName(fetchArticleResponse.article.author.username)

  }, [fetchArticleResponse])


  useEffect(() => {
    if (!updateArticleResponse) return
    setIsSuccessefullSubmit(true);
  }, [updateArticleResponse]);

  useEffect(() => {
    if (currentUserState && currentUserState.currentUser) {
      setCurrentUserName(currentUserState.currentUser.username)
    }
  }, [currentUserState]);

  const handleSubmit = article => {
    doUpdateArticle({
      method: 'PUT',
      data: { article }
    })
  }

  if (isSuccessfullSubmit) {
    return <Redirect to={`/articles/${slug}`} />
  }

  if (currentAuthorName !== "" && currentUserName !== "" && currentAuthorName !== currentUserName) {
    return <Redirect to={`/articles/${slug}`} />

  }

  return (
    <><ArticleForm
      onSubmit={handleSubmit}
      errors={(updateArticleError && updateArticleError.errors) || {}}
      initialValues={initialValues}
    />
    </>
  )
}