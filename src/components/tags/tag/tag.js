import React from "react";
import { Link } from "react-router-dom";
import s from "./tag.module.scss";
export const Tag = ({ item, setActiveTag }) => {
  return (
    <Link
      to={`/feedTags/${item}`}
      className={s.tag}
      onClick={() => setActiveTag(item)}
    >
      <span className={s.inner}>{item}</span>
    </Link>
  );
};
