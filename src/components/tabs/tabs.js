import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";
import "./tabs.css";
export const Tabs = ({ tabs, resetActiveTag }) => {
  const [show, setShow] = useState(false);

  return (
    <ul className="nav nav-pills outline-active">
      <button onClick={() => setShow(!show)}>Вкл\вкл</button>
      {tabs &&
        tabs.map(tab => (
          <li className="nav-item" key={tab.url}>
            <CSSTransition
              in={show}
              //appear={true}
              timeout={2000}
              classNames="flash-active"
              //unmountOnExit
            >
              <NavLink to={tab.url} className="nav-link" exact>
                {tab.tags && <i className="ion-pound"></i>}
                {tab.name} &nbsp;
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
            </CSSTransition>
          </li>
        ))}
    </ul>
  );
};
