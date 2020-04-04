import React from "react";
import s from "./logo.module.scss";
export const Logo = () => {
  return (
    <span className={s.logo}>
      <i className={`${s.icon} material-icons`}>cloud</i>
      <span className={`${s.slogan}`}>MyDium</span>
    </span>
  );
};
