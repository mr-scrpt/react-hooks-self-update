import React from "react";
//import { withButtonStyle } from "components/buttons";
import s from "./buttonWithImg.module.scss";
import cx from "classnames";
export const ButtonWithImg = ({
  tag,
  size,
  img,
  imgDefault = "",
  children,
  alt,
}) => {
  const avatar = img ? img : imgDefault;
  const Tag = tag;

  const btnClass = cx({
    [s.btn]: true,
    [s.btn_size_xs]: size === "xs",
    [s.btn_size_s]: size === "s",
    [s.btn_size_m]: size === "m",
    [s.btn_size_l]: size === "l",
    [s.btn_size_xl]: size === "xl",
  });

  return (
    <Tag className={btnClass}>
      <img
        src={avatar}
        alt={alt}
        className={`${s.btn__img} ${s.btn__img_arround}`}
      />
      <span className={s.btn__text}>{children}</span>
    </Tag>
  );
};
