import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import s from "../button.module.css";
export const Button = ({
  tag = "button",
  size,
  to,
  children,
  disabled,
  isActive,
  onClick = () => {},
}) => {
  let Tag = tag !== "a" ? tag : Link;

  const btnClass = cx({
    [s.btn]: true,
    [s.btn_type_link]: tag === "a",
    //[s.btn_type_pseudo]: type === "pseudo",
    [s.btn_size_xs]: size === "xs",
    [s.btn_size_m]: size === "m",
    [s.btn_size_l]: size === "l",
    [s.btn_size_s]: size === "s",
    [s.btn_size_xl]: size === "xl",
    [s.btn_active]: isActive,
  });

  return (
    <Tag className={btnClass} onClick={onClick} to={to} disabled={disabled}>
      <span className={s.btn__text}>{children}</span>
    </Tag>
  );
};
