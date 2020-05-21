import React from "react";
import { Header } from "components/header";
//import { Footer } from "../../components/footer";

import s from "./general.module.css";

export const General = ({ children }) => {
  return (
    <div className={s.general}>
      <div className={s.general__inner}>
        <Header />
        {children}
      </div>
    </div>
  );
};
