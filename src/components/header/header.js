import React, { useState } from "react";
import { connect } from "react-redux";

import { getUserAuth, getIsLoggedIn } from "modules/userAuth";

import { NavLink } from "react-router-dom";
import { Logo } from "components/logo";

import s from "./header.module.scss";
import cx from "classnames";
export const Component = ({ user, isLoggedIn }) => {
  const [showMenu, setShowMenu] = useState(true);

  const menuClasses = cx({
    [s.nav]: true,
    [s.nav_hidden]: showMenu
  });
  return (
    <div className={s.header}>
      <div className={`container ${s.inner}`}>
        <span className={s.menuButton}>
          <button
            className={`btn btn_size_l btn_menu`}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <i className={`material-icons btn__icon ${s.menuIcon}`}>menu</i>
          </button>
        </span>
        <div className={s.logo}>
          <NavLink to="/" exact>
            <Logo />
          </NavLink>
        </div>
        <nav className={menuClasses}>
          <NavLink to="/" exact className={s.link}>
            <i className={`material-icons ${s.icon}`}>home</i>
            <span className={`link-text ${s.linkText}`}>Домой</span>
          </NavLink>
          {!isLoggedIn && (
            <>
              <NavLink to="/login" className={s.link}>
                <span className={`link-text ${s.linkText}`}>Войти</span>
              </NavLink>

              <NavLink to="/registration" className={s.link}>
                <span className={`link-text ${s.linkText}`}>Регистрация</span>
              </NavLink>
            </>
          )}

          {isLoggedIn && (
            <>
              <NavLink to="/articles/new" className={s.link}>
                <i className={`material-icons ${s.icon}`}>add</i>
                <span className={`link-text ${s.linkText}`}>
                  Cоздать замтеку
                </span>
              </NavLink>

              <NavLink to="/settings" className={s.link}>
                <i className={`material-icons ${s.icon}`}>settings</i>
                <span className={`link-text ${s.linkText}`}>Настройки</span>
              </NavLink>

              <NavLink to={`/profile/${user.username}`} className={s.btn}>
                <span className={`btn btn_size_xl`}>
                  <img
                    className={`img btn__img ${s.avatar}`}
                    src={
                      user.image
                        ? user.image
                        : "https://dummyimage.com/100x100/abq/fre"
                    }
                    alt={`Аватарка ${user.username}`}
                  />
                  <span className={`btn__text ${s.btnText}`}>
                    {user.username}
                  </span>
                </span>
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: getUserAuth(state),
  isLoggedIn: getIsLoggedIn(state)
});

export const Header = connect(mapStateToProps)(Component);

{
  /* <div className={s.header}>
      <nav className={`container ${s.inner}`}>
        <NavLink to="/" exact>
          <Logo />
        </NavLink>
        <ul class={s.nav}>
          <li class={s.navlink}>
            <NavLink to="/" exact className={s.link}>
              <span className="link-text">Домой</span>
            </NavLink>
          </li>
          {!isLoggedIn && (
            <>
              <li class={s.navlink}>
                <NavLink to="/login" className={s.link}>
                  <span className="link-text">Войти</span>
                </NavLink>
              </li>
              <li class={s.navlink}>
                <NavLink to="/registration" className={s.link}>
                  <span className="link-text">Регистрация</span>
                </NavLink>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li class={s.navlink}>
                <NavLink to="/articles/new" className={s.link}>
                  <i className={`material-icons ${s.icon}`}>add</i>
                  <span className="link-text">Cоздать замтеку</span>
                </NavLink>
              </li>

              <li class={s.navlink}>
                <NavLink to="/settings" className={s.link}>
                  <i className={`material-icons ${s.icon}`}>settings</i>
                  <span className="link-text">Настройки</span>
                </NavLink>
              </li>

              <li class={`${s.navlink} ${s.btnLink}`}>
                <NavLink
                  to={`/profile/${user.username}`}
                  className={`btn btn_size_xl ${s.btn}`}
                >
                  <img
                    className={`img btn__img ${s.avatar}`}
                    src={
                      user.image
                        ? user.image
                        : "https://dummyimage.com/100x100/abq/fre"
                    }
                    alt={`Аватарка ${user.username}`}
                  />
                  <span className="btn__text">{user.username}</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div> */
}
