import React from "react";
import { connect } from "react-redux";

import { getUserAuth, getIsLoggedIn } from "modules/userAuth";

import { NavLink } from "react-router-dom";
import { Logo } from "components/logo";

export const Component = ({ user, isLoggedIn }) => {
  return (
    <nav>
      <div class="nav-wrapper">
        <div className="container">
          <NavLink to="#!" class="brand-logo">
            <i className={`material-icons`}>cloud</i>
            Logo
          </NavLink>
          <ul class="right hide-on-med-and-down">
            <li>
              <NavLink to="sass.html">
                <i class="material-icons left">search</i>Link with Left Icon
              </NavLink>
            </li>
            <li>
              <NavLink to="badges.html">Link with Right Icon</NavLink>
            </li>
            <li>
              <NavLink to="badges.html">
                <i class="material-icons right">view_module</i>Link with Right
                Icon
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  user: getUserAuth(state),
  isLoggedIn: getIsLoggedIn(state)
});

export const TestHeader = connect(mapStateToProps)(Component);

/* 
<nav>
      <div className={s.header}>
        <div className={`container ${s.inner}`}>
          <NavLink to="/" exact>
            <Logo />
          </NavLink>
          <ul class={s.nav}>
            <li class={s.navlink}>
              <NavLink to="/" exact className={s.link}>
                Домой
              </NavLink>
            </li>
            {!isLoggedIn && (
              <>
                <li class={s.navlink}>
                  <NavLink to="/login" className={s.link}>
                    Войти
                  </NavLink>
                </li>
                <li class={s.navlink}>
                  <NavLink to="/registration" className={s.link}>
                    Регистрация
                  </NavLink>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
                <li class={s.navlink}>
                  <NavLink to="/articles/new" className={s.link}>
                    <i class="material-icons">add</i>
                    Создать замтеку
                  </NavLink>
                </li>

                <li class={s.navlink}>
                  <NavLink to="/settings" className={s.link}>
                    <i class="material-icons">settings</i>
                    Настройки
                  </NavLink>
                </li>

                <li class={s.navlink}>
                  <NavLink
                    to={`/profile/${user.username}`}
                    className={s.link}
                    //className="waves-effect waves-light btn-large btn-floating pink"
                  >
                    {/* <img
                    className="user-pic"
                    src={
                      user.image
                        ? user.image
                        : "https://dummyimage.com/100x100/abq/fre"
                    }
                    alt={`Аватарка ${user.username}`}
                  /> 
                    {user.username}
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav> */
