import React from 'react';
import { Tag } from 'components/tag';
import { ShowLoading } from 'components/showLoading';
import { ShowErrors } from 'components/showErrors';
export const PopularTagsLayout = ({ tags, isLoading, error }) => {
  const prefix = 'tags/';
  const classes = `tag-default tag-pill`;
  return (
    <div className="sidebar">
      <h2>Популярные теги</h2>
      <ShowLoading loading={isLoading} />
      <ShowErrors errors={error} />
      <div className="tag-list">
        {tags && (
          tags.map(tag => (
            <Tag item={tag} key={tag} urlPrefix={prefix} classes={classes} />
          ))
        )
        }
      </div>
    </div>
  )
}

