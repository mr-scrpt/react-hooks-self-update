import React, { useEffect } from "react";
import { Tag } from "components/tag";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";
import { CSSTransition, TransitionGroup } from "react-transition-group";
export const PopularTagsLayout = ({
  tagsList,
  isLoading,
  error,
  setActiveTag
}) => {
  const prefix = "tags/";
  const classes = `tag-default tag-pill`;

  return (
    <div className="sidebar">
      <h2>Популярные теги</h2>
      <ShowLoading loading={isLoading} />
      <ShowErrors errors={error} />
      <TransitionGroup className="tag-list" component="div">
        {tagsList &&
          tagsList.map((tag, idx) => (
            <CSSTransition key={idx} timeout={20 * (idx + 1)} classNames="feed">
              <Tag
                item={tag}
                key={tag}
                urlPrefix={prefix}
                classes={classes}
                setActiveTag={setActiveTag}
              />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};
