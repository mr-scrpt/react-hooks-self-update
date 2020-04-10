import React from "react";
/* import s from "./buttonWithIcon.module.scss"; */
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

  /*  const btnClass = cx({
    //[s.btn]: true,
    [s.btn_size_xs]: size === "xs",
    [s.btn_size_s]: size === "s",
    [s.btn_size_m]: size === "m",
    [s.btn_size_l]: size === "l",
    [s.btn_size_xl]: size === "xl",
    [s.active]: isActive,
  }); */

  const btnClass = cx({
    //[s.btn]: true,
    btn_size_xs: size === "xs",
    btn_size_s: size === "s",
    btn_size_m: size === "m",
    btn_size_l: size === "l",
    btn_size_xl: size === "xl",
    btn_active: isActive,
  });

  return (
    <Tag className={`btn ${btnClass}`} onClick={onClick}>
      {icon && <i className="material-icons icon">{icon}</i>}
      <span className="btn__text">{children}</span>
    </Tag>
  );
};
