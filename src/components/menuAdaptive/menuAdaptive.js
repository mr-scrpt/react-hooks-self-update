import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import s from "./menuAdaptive.module.css";
import { CSSTransition } from "react-transition-group";

import { menuOutsideClose } from "@hl/menuOutsideClose";

export const MenuAdaptive = ({ menu }) => {
  const menuRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuWrapper = cx({
    [s.nav__wrap]: true,
    [s.nav__wrap_open]: isMenuOpen,
  });

  useEffect(() => {
    const closer = menuOutsideClose(menuRef, setMenuOpen);
    return () => {
      closer();
    };
  }, [menuRef]);

  const handleClick = () => {
    setMenuOpen(false);
  };
  console.log("-> menu", menu);
  return (
    <nav className={s.nav} ref={menuRef}>
      <div className={s.nav__inner}>
        <CSSTransition
          timeout={250}
          mountOnEnter
          unmountOnExit
          in={!isMenuOpen}
          classNames={{
            enter: s.nav__link_open_enter,
            enterActive: s.nav__link_open_enterActive,
            enterDone: s.nav__link_open_enterDone,
            exit: s.nav__link_open_exit,
            exitActive: s.nav__link_open_exitActive,
            exitDone: s.nav__link_open_exitDone,
          }}
        >
          <span
            className={`${s.nav__link} ${s.nav__link_open}`}
            onClick={() => setMenuOpen(true)}
          >
            <i className={`material-icons ${s.nav__linkIcon}`}>menu</i>
          </span>
        </CSSTransition>
        <div className={menuWrapper}>
          <span
            className={`${s.nav__link} ${s.nav__link_close}`}
            onClick={() => setMenuOpen(false)}
          >
            <i className={`material-icons ${s.nav__linkIcon}`}>close</i>
          </span>
          {menu.map((item) => {
            return (
              <NavLink
                to={item.to}
                className={s.nav__link}
                onClick={handleClick}
                key={item.name}
              >
                {item.icon && (
                  <i className={`material-icons ${s.nav__linkIcon}`}>
                    {item.icon}
                  </i>
                )}
                <span className={`link-text ${s.nav__linkText}`}>
                  {item.name}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
