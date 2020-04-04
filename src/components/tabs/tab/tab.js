import React from "react";
import { NavLink } from "react-router-dom";
import s from "./tab.module.scss";

export const Tab = ({ tab, resetActiveTag = () => {} }) => {
  return (
    <NavLink
      exact
      to={tab.url}
      className={s.link}
      activeClassName={s.linkActive}
    >
      {tab.tags && <i className="ion-pound"></i>}
      {tab.name}
      {tab.tags && (
        <button
          type="button"
          onClick={() => {
            resetActiveTag();
          }}
          className="btn btn-sm ion-close btn-outline-warning"
        ></button>
      )}
    </NavLink>
  );
};
