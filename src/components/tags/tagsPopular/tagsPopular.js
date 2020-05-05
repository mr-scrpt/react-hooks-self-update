import React from "react";
import { TagsPopularContainer } from "components/tags";
import s from "./tagsPopular.module.scss";

export const TagsPopular = () => {
  return (
    <div className="">
      <div className={s.inner}>
        <div className={s.title}>Популярные теги теги теги</div>
        <TagsPopularContainer />
      </div>
    </div>
  );
};

/* import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  fetchTagsPopularRequest,
  setFeedsTagsActive,
  getTagList,
  getIsLoading,
  getIsError,
} from "modules/tagsPopular";
import { TagsPopularLayout } from "components/tags/tagsPopularLayout";

const Copmponent = ({
  tagsList,
  loading,
  error,
  fetchTagsPopularRequest,
  setFeedsTagsActive,
}) => {
  useEffect(() => {
    fetchTagsPopularRequest();
  }, [fetchTagsPopularRequest]);

  const setActiveTag = (tagName) => {
    setFeedsTagsActive(tagName);
  };

  return (
    <TagsPopularLayout
      tagsList={tagsList}
      loading={loading}
      error={error}
      setActiveTag={setActiveTag}
    />
  );
};

const mapStateToProps = (state) => ({
  tagsList: getTagList(state),
  error: getIsError(state),
  loading: getIsLoading(state),
});
const mapDispatchToProps = {
  fetchTagsPopularRequest,
  setFeedsTagsActive,
};

export const TagsPopular = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Copmponent);
 */
