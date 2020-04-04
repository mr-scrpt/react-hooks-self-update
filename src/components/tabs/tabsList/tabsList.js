import React from "react";
import { Tab } from "components/tabs";
export const TabsList = ({ tabs, resetActiveTag }) => {
  return (
    <div className="card">
      <ul className="tabs">
        {tabs &&
          tabs.map(tab => (
            <li className="tab" key={tab.url}>
              <Tab tab={tab} resetActiveTag={resetActiveTag} />
            </li>
          ))}
      </ul>
    </div>
  );
};
