import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import s from "../button.module.css";
export const ButtonWithImg = ({
  tag = "button",
  size,
  img,
  disabled,
  isActive,
  imgDefault = "",
  children,
  alt,
  type,
  to,
  onClick = () => {},
}) => {
  const avatar = img ? img : imgDefault;
  let Tag = tag !== "a" ? tag : Link;

  const btnClass = cx({
    [s.btn]: true,
    [s.btn_type_link]: tag === "a",
    [s.btn_size_xs]: size === "xs",
    [s.btn_size_m]: size === "m",
    [s.btn_size_l]: size === "l",
    [s.btn_size_s]: size === "s",
    [s.btn_size_xl]: size === "xl",
    [s.btn_active]: isActive,
  });
  const imgClass = cx({
    [s.btn__img]: true,
    [s.btn__img_around]: type === "around",
  });

  return (
    <Tag className={btnClass} onClick={onClick} disabled={disabled} to={to}>
      <img src={avatar} alt={alt} className={imgClass} />
      <span className={s.btn__text}>{children}</span>
    </Tag>
  );
};
