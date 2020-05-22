import React from "react";
import { Header } from "@cm/header";
//import { Footer } from "@cm/footer";
import { Banner } from "@cm/banner";

import s from "./general.module.css";

export const General = ({ children }) => {
  return (
    <>
      <Header />
      <Banner />
      {children}
    </>
  );
};
