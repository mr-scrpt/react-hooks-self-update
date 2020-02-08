import React, { useEffect, useState } from 'react'
import { useFetch } from 'hooks/useFetch';
import { ArticleInfo } from 'components/articleInfo';
import { ShowLoading } from 'components/showLoading';
import { ShowErrors } from 'components/showErrors';
import { Redirect } from 'react-router-dom';
export const Article = ({ match }) => {
  const slug = match.params.slug;
  const apiURL = `articles/${slug}`;
  const [{
    response: fetchArticleResponse,
    isLoading: fetchArticleIsLoading,
    error: fetchArticleError
  },
    doFetch] = useFetch(apiURL);
  const [{ response: deleteArticleResponse }, doDeleteArticle] = useFetch(apiURL);
  const [isSuccessefulDelete, setIsSuccessefulSubmit] = useState(false);
  const articleDelete = () => {
    doDeleteArticle({
      method: 'DELETE'
    })
  }

  useEffect(() => {
    doFetch();
  }, [doFetch])


  useEffect(() => {
    if (!deleteArticleResponse) return;
    setIsSuccessefulSubmit(true)
  }, [deleteArticleResponse]);
  if (deleteArticleResponse) {
    return <Redirect to={'/'} />
  }


  return (
    <>
      <ShowLoading loading={fetchArticleIsLoading} />
      <ShowErrors errors={fetchArticleError} />
      {!fetchArticleIsLoading && fetchArticleResponse && fetchArticleResponse.article && (
        <ArticleInfo article={fetchArticleResponse.article} slug={slug} articleDelete={articleDelete} />
      )}
    </>

  )
}

