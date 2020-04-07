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

  return (
    <nav className={s.nav} ref={menuRef}>
      <CSSTransition
        timeout={250}
        mountOnEnter
        unmountOnExit
        in={!isMenuOpen}
        classNames={{
          enter: s.open_enter,
          enterActive: s.open_enterActive,
          enterDone: s.open_enterDone,
          exit: s.open_exit,
          exitActive: s.open_exitActive,
          exitDone: s.open_exitDone,
        }}
      >
        <span
          className={`${s.link} ${s.open}`}
          onClick={() => setMenuOpen(true)}
        >
          <i className={`material-icons`}>menu</i>
        </span>
      </CSSTransition>
      <div className={menuWrap}>
        <span
          className={`${s.link} ${s.close}`}
          onClick={() => setMenuOpen(false)}
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
