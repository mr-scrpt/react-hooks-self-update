import React from "react";
import { Link } from "react-router-dom";
import s from "./tag.module.scss";
import cx from "classnames";

export const Tag = ({ item, setActiveTag, mix }) => {
  const tagClass = cx(
    {
      [s.tag]: true,
    },
    mix
  );
  return (
    <Link
      to={`/feedTags/${item}`}
      className={tagClass}
      onClick={() => setActiveTag(item)}
    >
      <div className={s.inner}>{item}</div>
    </Link>
  );
};
