import React from "react";
import { Link } from "react-router-dom";

export const Tag = ({ item, setActiveTag }) => {
  return (
    <Link
      to={`/feedTags/${item}`}
      className="chip"
      onClick={() => setActiveTag(item)}
    >
      {item}
    </Link>
  );
};
