import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  fetchTagsPopularRequest,
  setFeedsTagsActive,
  getTagList,
  getIsLoading,
  getIsError,
} from "modules/tagsPopular";
import { TagsListWithEffect } from "components/tags";

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
    <TagsListWithEffect
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

export const TagsPopularContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Copmponent);
