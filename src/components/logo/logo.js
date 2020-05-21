import React from "react";
import s from "./logo.module.css";
import { ReactComponent as ReactLogoComponent } from "./churros.svg";

export const Logo = () => {
  return (
    <span className={s.logo}>
      <ReactLogoComponent width={50} height={50} />
      <span className={s.slogan}>MyDium</span>
    </span>
  );
};
