import React from "react";
/* import s from "./banner.module.scss"; */
import s from "./banner.module.css";
export const Banner = () => {
  return (
    <div className={s.banner}>
      <div className={s.banner__inner}>
        <h1 className={s.banner__title}>MyDium</h1>
        <p className={s.banner__slogan}>Место для обмена знаниями</p>
      </div>
    </div>
  );
};
