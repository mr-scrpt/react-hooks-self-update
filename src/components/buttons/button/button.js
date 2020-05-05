import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

export const Button = ({
  tag = "button",
  size,
  to,
  children,
  mix,
  onClick = () => {},
}) => {
  let Tag = tag !== "a" ? tag : Link;

  const btnClass = cx(
    {
      btn: true,
      btn_type_link: tag === "a" && true,
      btn_size_xs: size === "xs",
      btn_size_m: size === "m",
      btn_size_l: size === "l",
      btn_size_s: size === "s",
      btn_size_xl: size === "xl",
    },
    mix
  );

  return (
    <Tag className={btnClass} onClick={onClick} to={to}>
      <span className="btn__text">{children}</span>
    </Tag>
  );
};
