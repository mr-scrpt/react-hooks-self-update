import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { setFeedsTagsActive } from "modules/tagsPopular";
import { TagsList } from "components/tags";

const Copmponent = ({ tagsList, setFeedsTagsActive }) => {
  const setActiveTag = (tagName) => {
    setFeedsTagsActive(tagName);
  };

  return (
    <TagsList
      tagsList={tagsList}
      loading={false}
      error={false}
      setActiveTag={setActiveTag}
    />
  );
};

const mapDispatchToProps = {
  setFeedsTagsActive,
};

export const TagsSnippetContainer = compose(connect(null, mapDispatchToProps))(
  Copmponent
);
