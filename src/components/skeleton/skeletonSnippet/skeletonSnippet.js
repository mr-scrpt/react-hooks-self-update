import React from "react";
import Skeleton from "react-loading-skeleton";
import s from "./skeletonSnippet.module.css";
export const SkeletonSnippet = () => {
  return (
    <div className={`${s.feed} ${s.feed_bottom}`}>
      <div className={s.feed__inner}>
        <div className={`${s.feed__user}`}>
          <div className={s.feed__avatar}>
            <Skeleton circle={true} height={120} width={120} />
          </div>

          <div className={s.feed__userblock}>
            <Skeleton count={3} height={20} width={100} />
          </div>
        </div>

        <div className={s.feed__info}>
          <Skeleton width={`60%`} />
          <Skeleton count={5} />
          <div className={s.feed__bottom}>
            <div className={s.feed__about}>
              <Skeleton width={120} height={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
