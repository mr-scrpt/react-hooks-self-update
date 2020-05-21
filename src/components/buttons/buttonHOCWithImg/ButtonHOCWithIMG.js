import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import s from "./buttonWithImg.module.css";

export const ButtonHOCWithIMG = (Component) => ({
  img,
  imgDefault = {},
  alt,
  children,
  size,
  type,
  ...rest
}) => {
  const image = img ? img : imgDefault;

  const imgClass = cx({
    [s.btn__img]: true,
    [s.btn__img_arround]: type === "arround",
    [s.btn_size_xs]: size === "xs",
    [s.btn_size_m]: size === "m",
    [s.btn_size_l]: size === "l",
    [s.btn_size_s]: size === "s",
    [s.btn_size_xl]: size === "xl",
  });
  return (
    <Component size={size} {...rest}>
      <img src={image} alt={alt} className={imgClass} />
      <span className={s.btn__text}>{children}</span>
    </Component>
  );
};
