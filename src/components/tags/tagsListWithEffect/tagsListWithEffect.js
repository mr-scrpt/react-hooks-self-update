import React from "react";
import { connect } from "react-redux";
import { getTagList, getIsLoading, getIsError } from "modules/tagsPopular";
import { Tag } from "components/tags";
import { setFeedsTagsActive } from "modules/tagsPopular";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import s from "./tagsListWithEffect.module.scss";

import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";

const Component = ({ tagsList, loading, error, setActiveTag }) => {
  return (
    <>
      {loading && <Skeleton count={7} height={20} />}
      <TransitionGroup component="ul" className={s.list}>
        {/*  <ShowLoading loading={loading} /> */}
        <ShowErrors errors={error} />
        {tagsList &&
          tagsList.map((tag, idx) => (
            <CSSTransition
              key={idx}
              timeout={20 * (idx + 1)}
              classNames={{
                enter: s.enter,
                enterActive: s.active,
                enterDone: s.done,
                exit: s.exit,
              }}
            >
              <Tag
                item={tag}
                key={tag}
                setActiveTag={setActiveTag}
                mix={s.tag}
              />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </>
  );
};
const mapStateToProps = (state) => ({
  tagsList: getTagList(state),
  loading: getIsLoading(state),
  error: getIsError(state),
});
const mapDispatchToProps = {
  setFeedsTagsActive,
};
export const TagsListWithEffect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
