import React from 'react';
import { Tag } from 'components/tag';

export const TagList = ({ tagList }) => {
  const classes = `tag-default tag-pill tag-outline`;
  const prefix = 'tags/';
  return (
    <>
      {
        tagList && tagList.map(tag => (
          <Tag item={tag} key={tag} urlPrefix={prefix} classes={classes} />
        ))
      }
    </>
  )
}