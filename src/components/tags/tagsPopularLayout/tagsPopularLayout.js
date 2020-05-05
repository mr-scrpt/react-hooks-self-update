import React from "react";
import s from "./tagsPopularLayout.module.scss";
import { TagsPopularContainer } from "component/tags/tagsPopulatContainer";

export const TagsPopularLayout = () => {
  return (
    <div className="">
      <div className={s.inner}>
        <div className={s.title}>Популярные теги теги теги</div>
        <TagsPopularContainer />
      </div>
    </div>
  );
};
