import React from "react";
import { connect } from "react-redux";

import { getUserAuth, getIsLoggedIn } from "modules/userAuth";

import { menuList } from "helpers/menuList";
import { NavLink } from "react-router-dom";
import { Logo } from "components/logo";
import { MenuAdaptive } from "components/menuAdaptive";

import { Button, ButtonWithIcon, ButtonWithImg } from "components/buttons";
import AvatarDefault from "assets/img/avatar_default.jpg";
import s from "./header.module.css";

export const Component = ({ user, isLoggedIn }) => {
  const menu = menuList(isLoggedIn, user);

  return (
    <div className={s.header}>
      <div className={s.header__wrap}>
        <div className={s.header__inner}>
          <div className={s.header__logo}>
            <NavLink to="/" exact className={s.header__logoLink}>
              <Logo />
            </NavLink>
          </div>
          <div className={s.header__menu}>
            <MenuAdaptive menu={menu} />
          </div>
          {/* <Button
            size="xl"
            isActive={true}
            tag="a"
            to={`/profile/${user.username}`}
          >
            Кнока простая
          </Button>
          <ButtonWithIcon size="xl" icon="close" disabled={true}>
            Кнока-иконка
          </ButtonWithIcon>
          <ButtonWithImg size="xl" img={AvatarDefault} type="around">
            Кнопка с картинкой
          </ButtonWithImg> */}
          {/* {isLoggedIn && (
            <div className={s.header__user}>
              <ButtonWithImg
                tag="a"
                to={`/profile/${user.username}`}
                size="l"
                img={user.image}
                alt={`Аватарка ${user.username}`}
                imgDefault={"//dummyimage.com/100x100/abq/fre"}
                type="around"
              >
                {user.username}
              </ButtonWithImg>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: getUserAuth(state),
  isLoggedIn: getIsLoggedIn(state),
});

export const Header = connect(mapStateToProps)(Component);

{
  /*  <nav className={menuClasses}>
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
        </nav>*/
}
