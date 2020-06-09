import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import s from "../button.module.css";

export const ButtonWithIcon = ({
  tag = "button",
  size,
  icon,
  onClick,
  isActive,
  disabled,
  children,
}) => {
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
  const iconClass = cx({
    "material-icons": true,
    [s.icon]: true,
  });

  return (
    <Tag className={btnClass} onClick={onClick} disabled={disabled}>
      {icon && <i className={iconClass}>{icon}</i>}
      {children && <span className={s.btn__text}>{children}</span>}
    </Tag>
  );
};
