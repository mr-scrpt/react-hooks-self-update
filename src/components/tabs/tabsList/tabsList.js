import React from "react";
import { Tab } from "components/tabs";
import s from "./tabsList.module.css";

export const TabsList = ({ tabs, resetActiveTag }) => {
  return (
    <div className={s.tabs}>
      <ul className={s.tabs__inner}>
        {tabs &&
          tabs.map((tab) => (
            <li className={s.tabs__item} key={tab.url}>
              <Tab tab={tab} resetActiveTag={resetActiveTag} />
            </li>
          ))}
      </ul>
    </div>
  );
};
