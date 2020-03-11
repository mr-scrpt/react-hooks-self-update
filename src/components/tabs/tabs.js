import React from "react";
import { NavLink } from "react-router-dom";
export const Tabs = ({ tabs, resetActiveTag }) => {
  return (
    <ul className="nav nav-pills outline-active">
      {tabs &&
        tabs.map(tab => (
          <li className="nav-item" key={tab.url}>
            <NavLink to={tab.url} className="nav-link" exact>
              {tab.tags && <i className="ion-pound"></i>}
              {tab.name} &nbsp;
              {tab.tags && (
                <button
                  type="button"
                  onClick={() => {
                    resetActiveTag(tab.name);
                  }}
                  className="btn btn-sm ion-close btn-outline-warning"
                ></button>
              )}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};
