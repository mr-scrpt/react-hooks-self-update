import React, { useEffect, useState, useContext } from 'react';
import { ArticleForm } from 'components/articleForm';
import { useFetch } from 'hooks/useFetch';
import { Redirect } from 'react-router-dom';
import { CurrentUserContext } from 'contexts/currentUserContext';

export const CreateArticle = () => {
  const [currentUserState] = useContext(CurrentUserContext);



  const apiURL = 'articles';
  const [{ response, isLoading, error }, doFetch] = useFetch(apiURL);
  const [isSuccessSubmit, setSuccessSubmit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: []
  };
  const handleSubmit = article => {
    console.log('handle submit', article);
    doFetch({
      method: "POST", data: {
        article
      }
    })
  }

  useEffect(() => {
    if (!response) return;
    setSuccessSubmit(true)
  }, [response])

  useEffect(() => {
    if (currentUserState && currentUserState.isLoggedIn === false) {
      setIsLoggedIn(false)
    }
  }, [currentUserState]);

  if (isLoggedIn === false) {
    return <Redirect to={`/`} />
  }

  if (isSuccessSubmit) {
    return <Redirect to={`/articles/${response.article.slug}`} />
  }

  return (
    <>
      <ArticleForm onSubmit={handleSubmit} error={(error && error.errors) || {}} initialValues={initialValues} />
    </>
  )
}