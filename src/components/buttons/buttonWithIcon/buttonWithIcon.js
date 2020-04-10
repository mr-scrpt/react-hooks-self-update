import React from "react";
import cx from "classnames";
export const ButtonWithIcon = ({
  tag = "button",
  size,
  icon,
  onClick,
  isActive,
  disabled,
  children,
}) => {
  const Tag = tag;
  const btnClass = cx({
    btn: true,
    btn_size_xs: size === "xs",
    btn_size_s: size === "s",
    btn_size_m: size === "m",
    btn_size_l: size === "l",
    btn_size_xl: size === "xl",
    btn_active: isActive,
  });

  return (
    <Tag className={btnClass} onClick={onClick} disabled={disabled}>
      {icon && <i className="material-icons icon">{icon}</i>}
      <span className="btn__text">{children}</span>
    </Tag>
  );
};
