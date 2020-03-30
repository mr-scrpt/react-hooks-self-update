import React from "react";
import { Tag } from "components/tag";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";
import { CSSTransition, TransitionGroup } from "react-transition-group";
export const PopularTagsLayout = ({
  tagsList,
  loading,
  error,
  setActiveTag
}) => {
  return (
    <div className="sidebar">
      <h2>Популярные теги</h2>

      <ShowLoading loading={loading} />
      <ShowErrors errors={error} />
      <TransitionGroup className="tag-list" component="div">
        {tagsList &&
          tagsList.map((tag, idx) => (
            <CSSTransition key={idx} timeout={20 * (idx + 1)} classNames="feed">
              <Tag item={tag} key={tag} setActiveTag={setActiveTag} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};
