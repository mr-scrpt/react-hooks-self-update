import React from "react";
import s from "./buttonWithIcon.module.scss";
import cx from "classnames";
export const ButtonWithIcon = ({
  tag = "button",
  size,
  icon,
  onClick,
  isActive,
  children,
}) => {
  const Tag = tag;
  console.log("is-active", isActive);

  const btnClass = cx({
    [s.btn]: true,
    [s.btn_size_xs]: size === "xs",
    [s.btn_size_s]: size === "s",
    [s.btn_size_m]: size === "m",
    [s.btn_size_l]: size === "l",
    [s.btn_size_xl]: size === "xl",
    [s.active]: isActive,
  });

  return (
    <Tag className={btnClass} onClick={onClick}>
      {icon && <i className={`material-icons ${s.icon}`}>{icon}</i>}
      <span className={s.btn__text}>{children}</span>
    </Tag>
  );
};
