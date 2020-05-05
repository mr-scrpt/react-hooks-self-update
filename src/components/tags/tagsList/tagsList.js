import React from "react";
import { Tag } from "components/tags";

import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";

import s from "./tagsList.module.scss";
import cx from "classnames";

export const TagsList = ({ tagsList, setActiveTag, mix, loading, error }) => {
  const tagsClasses = cx(
    {
      [s.list]: true,
    },
    mix
  );
  const prefix = "tags/";

  return (
    <ul className={tagsClasses}>
      <ShowLoading loading={loading} />
      <ShowErrors errors={error} />

      {tagsList &&
        tagsList.map((tag) => (
          <Tag
            item={tag}
            key={tag}
            urlPrefix={prefix}
            setActiveTag={setActiveTag}
            mix={s.tag}
          />
        ))}
    </ul>
  );
};
