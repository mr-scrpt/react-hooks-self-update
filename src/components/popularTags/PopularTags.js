import React, { useEffect, useState } from 'react';
import { useFetch } from 'hooks/useFetch';
import { PopularTagsLayout } from './PopularTagsLayout';

export const PopularTags = () => {

  const [tags, setTags] = useState([]);
  const [{ response, isLoading, error }, doFetch] = useFetch('tags');

  useEffect(() => {
    doFetch();
  }, [doFetch])

  useEffect(() => {
    if (!response || !response.tags) return
    setTags(response.tags)
  }, [response])




  return <PopularTagsLayout tags={tags} isLoading={isLoading} error={error} />
}