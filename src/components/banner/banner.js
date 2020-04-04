import React from "react";
import s from "./banner.module.scss";
export const Banner = () => {
  return (
    <div className={`${s.banner}`}>
      <div className={`container ${s.inner}`}>
        <h1 className={s.title}>MyDium</h1>
        <p className={s.slogan}>Место для обмена знаниями</p>
      </div>
    </div>
  );
};
