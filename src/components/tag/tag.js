import React from "react";
import { Link } from "react-router-dom";

export const Tag = ({ item, classes, setActiveTag, urlPrefix = "" }) => {
  return (
    <Link
      to={`/feedTags/${item}`}
      className={classes}
      onClick={() => setActiveTag(item)}
    >
      {item}
    </Link>
  );
};
