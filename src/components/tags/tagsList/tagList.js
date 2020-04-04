import React from "react";
import { connect } from "react-redux";
import { Tag } from "components/tags";
import { setFeedsTagsActive } from "modules/tagsPopular";
const Component = ({ tagList, setFeedsTagsActive }) => {
  const classes = `tag-default tag-pill tag-outline`;
  const prefix = "tags/";
  const setActiveTag = tagName => {
    setFeedsTagsActive(tagName);
  };
  return (
    <>
      {tagList &&
        tagList.map(tag => (
          <Tag
            item={tag}
            key={tag}
            urlPrefix={prefix}
            classes={classes}
            setActiveTag={setActiveTag}
          />
        ))}
    </>
  );
};
const mapDispatchToProps = {
  setFeedsTagsActive
};
export const TagList = connect(null, mapDispatchToProps)(Component);
