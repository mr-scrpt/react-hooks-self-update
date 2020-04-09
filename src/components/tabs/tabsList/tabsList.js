import React from "react";
import { Tab } from "components/tabs";
import s from "./tabsList.module.scss";

export const TabsList = ({ tabs, resetActiveTag }) => {
  return (
    <div className={s.tabs}>
      <ul className={s.inner}>
        {tabs &&
          tabs.map((tab) => (
            <li className={s.item} key={tab.url}>
              <Tab tab={tab} resetActiveTag={resetActiveTag} />
            </li>
          ))}
      </ul>
    </div>
  );
};
