import React from "react";
import { Tag } from "components/tags/tag";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import s from "./tagsPopular.module.css";

export const TagsPopularLayout = ({
  tagsList,
  loading,
  error,
  setActiveTag
}) => {
  return (
    <div className="card">
      <div className={s.inner}>
        <span className={s.title}>Популярные теги</span>
        <div className={s.body}>
          <ShowLoading loading={loading} />
          <ShowErrors errors={error} />
          <TransitionGroup>
            {tagsList &&
              tagsList.map((tag, idx) => (
                <CSSTransition
                  key={idx}
                  timeout={20 * (idx + 1)}
                  classNames="feed"
                >
                  <Tag item={tag} key={tag} setActiveTag={setActiveTag} />
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};
