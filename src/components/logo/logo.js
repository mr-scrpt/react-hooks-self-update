import React from "react";
import { NavLink } from "react-router-dom";
import s from "./logo.module.css";
import { ReactComponent as ReactLogoComponent } from "./churros.svg";


export const Logo = () => {
  return (
    <div className={s.logo}>
      <NavLink to="/" exact className={s.logo__link}>
        <ReactLogoComponent width={50} height={50} className={s.logo__img} />
        <span className={s.slogan}>MyDium</span>
      </NavLink>
    </div>
  );
};
