import React from "react";
import { NavLink } from "react-router-dom";

import s from "./tab.module.css";

import { ButtonWithIcon } from "@cm/buttons/buttonWithIcon";
export const Tab = ({ tab, resetActiveTag = () => {} }) => {
  return (
    <NavLink
      exact
      to={tab.url}
      className={s.tab}
      activeClassName={s.tab_active}
    >
      {tab.tags && <i className="material-icons">attach_file</i>}
      <span className={s.tab__name}>{tab.name}</span>
      {tab.tags && (
        <ButtonWithIcon size="l" icon="close" onClick={resetActiveTag} />
      )}
    </NavLink>
  );
};
{
  /* <button
          type="button"
          onClick={() => {
            resetActiveTag();
          }}
          className="btn"
        >
          <i className="material-icons">attachment</i>
        </button> */
}
