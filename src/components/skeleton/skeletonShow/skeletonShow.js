import React, { Fragment } from "react";
import { range } from "@hl/range";
export const SkeletonShow = ({ component, count }) => {
  if (!count) return component;
  const list = range(0, count);
  console.log("-> list", list);
  return (
    <>
      {list.map((item) => {
        return <Fragment key={item}>{component}</Fragment>;
      })}
    </>
  );
};
