import React from "react";
import s from "./tagsPopularLayout.module.css";
import { TagsPopularContainer } from "component/tags/tagsPopularContainer";

export const TagsPopularLayout = () => {
  return (
    <div className={s.tagsPopular}>
      {/*  <div className={s.tagsPopular__inner}>
        <div className={s.tagsPopular__title}>Популярные теги!</div>
        <TagsPopularContainer />
      </div> */}
    </div>
  );
};
