import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  fetchTagsPopularRequest,
  setFeedsTagsActive
} from "modules/tagsPopular";
import { PopularTagsLayout } from "./PopularTagsLayout";

const Copmponent = ({
  tagsList,
  loading,
  error,
  fetchTagsPopularRequest,
  setFeedsTagsActive
}) => {
  useEffect(() => {
    fetchTagsPopularRequest();
  }, [fetchTagsPopularRequest]);

  const setActiveTag = tagName => {
    setFeedsTagsActive(tagName);
  };

  return (
    <PopularTagsLayout
      tags={tagsList}
      isLoading={loading}
      error={error}
      setActiveTag={setActiveTag}
    />
  );
};

const mapStateToProps = ({ tagsPopularStore }) => tagsPopularStore;
const mapDispatchToProps = {
  fetchTagsPopularRequest,
  setFeedsTagsActive
};

export const PopularTags = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Copmponent);
