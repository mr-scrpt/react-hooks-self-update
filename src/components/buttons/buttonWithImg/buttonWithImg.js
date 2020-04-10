import React from "react";
import cx from "classnames";
export const ButtonWithImg = ({
  tag = "button",
  size,
  img,
  imgDefault = "",
  children,
  alt,
  onClick = () => {},
}) => {
  const avatar = img ? img : imgDefault;
  const Tag = tag;

  const btnClass = cx({
    btn: true,
    btn_size_xs: size === "xs",
    btn_size_m: size === "m",
    btn_size_l: size === "l",
    btn_size_s: size === "s",
    btn_size_xl: size === "xl",
  });

  return (
    <Tag className={btnClass} onClick={onClick}>
      <img
        src={avatar}
        alt={alt}
        className="btn__img btn__img_round" //{`${s.btn__img} ${s.btn__img_arround}`}
      />
      <span className="btn__text">{children}</span>
    </Tag>
  );
};
