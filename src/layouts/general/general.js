import React from "react";
import { Header } from "@cm/header";
import { Banner } from "@cm/banner";
import { Footer } from "@cm/footer";

import s from "./general.module.css";

export const General = ({ children }) => {
  return (
    <div className={s.general}>
      <Header />
      <Banner />
      {/* <div className={s.general__content}>{children}</div> */}
      {children}
      <Footer mixin={s.general__footer} />
    </div>
  );
};
