import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import s from "./menuAdaptive.module.scss";
import { CSSTransition } from "react-transition-group";

import { menuOutsideClose } from "helpers/menuOutsideClose";

export const MenuAdaptive = ({ listsss }) => {
  const menuRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuWrap = cx({
    [s.menuWrap]: true,
    [s.menuWrap_open]: isMenuOpen,
  });

  const list = [
    { name: "Домой", to: "/", icon: "home" },
    { name: "Создать фид", to: "/articles/new", icon: "add" },
    { name: "Настройки", to: "/articles/new", icon: "settings" },
    { name: "Создать фид", to: "/articles/new", icon: "add" },
    { name: "Создать фид", to: "/articles/new", icon: "add" },
    { name: "С", to: "/articles/new", icon: "add" },
  ];

  useEffect(() => {
    const closer = menuOutsideClose(menuRef, setMenuOpen);
    return () => {
      closer();
    };
  }, [menuRef]);

  const handleClick = () => {
    setMenuOpen(false);
  };
  /*  const [inProp, setInProp] = useState(false);

  return (
    <div>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <div>{"I'll receive my-node-* classes"}</div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(true)}>
        Click to Enter
      </button>
    </div>
  ); */

  return (
    <nav className={s.nav} ref={menuRef}>
      <CSSTransition
        timeout={250}
        mountOnEnter
        unmountOnExit
        in={!isMenuOpen}
        classNames={{
          enter: s.button_open_enter,
          enterActive: s.button_open_enterActive,
          enterDone: s.button_open_enterDone,
          exit: s.button_open_exit,
          exitActive: s.button_open_exitActive,
          exitDone: s.button_open_exitDone,
        }}
      >
        <span
          className={`${s.button} ${s.button_open}`}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <i className={`material-icons ${s.buttonIcon}`}>menu</i>
        </span>
      </CSSTransition>

      <div className={menuWrap}>
        <span
          className={`${s.button} ${s.button_close}`}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <i className={`material-icons ${s.buttonIcon}`}>close</i>
        </span>
        {list.map((item) => {
          return (
            <NavLink
              to={item.to}
              className={s.link}
              onClick={handleClick}
              key={item.name}
            >
              {item.icon && (
                <i className={`material-icons ${s.linkIcon}`}>{item.icon}</i>
              )}
              <span className={`link-text ${s.linkText}`}>{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
