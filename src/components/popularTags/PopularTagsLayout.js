import React from "react";
import { Tag } from "components/tag";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";
import { WithAnimationFlash } from "hoc/withAnimationFlash";
export const PopularTagsLayout = ({
  tags,
  isLoading,
  error,
  setActiveTag,
  resetActiveTag
}) => {
  const prefix = "tags/";
  const classes = `tag-default tag-pill`;

  return (
    <div className="sidebar">
      <h2>Популярные теги</h2>
      <ShowLoading loading={isLoading} />
      <ShowErrors errors={error} />
      <WithAnimationFlash>
        <div className="tag-list">
          {tags &&
            tags.data &&
            tags.data.tags &&
            tags.data.tags.map(tag => (
              <Tag
                item={tag}
                key={tag}
                urlPrefix={prefix}
                classes={classes}
                setActiveTag={setActiveTag}
              />
            ))}
        </div>
      </WithAnimationFlash>
    </div>
  );
};
