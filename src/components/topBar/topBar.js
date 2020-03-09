import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "contexts/currentUserContext";

export const TopBar = () => {
  const { user, isLoggedIn } = useContext(CurrentUserContext);
  console.log(user, isLoggedIn);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand" exact>
          Medium
        </NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              Домой
            </NavLink>
          </li>
          {isLoggedIn === false && (
            <>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Войти
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/registration" className="nav-link">
                  Регистрация
                </NavLink>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink to="/articles/new" className="nav-link">
                  <i className="ion-compose"></i>
                  &nbsp; Создать замтеку
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/settings" className="nav-link">
                  <i className="ion-gear-a"></i>
                  &nbsp; Настройки
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={`/profiles/${user.username}`} className="nav-link">
                  <img
                    className="user-pic"
                    src={
                      user.image
                        ? user.image
                        : "https://dummyimage.com/100x100/abq/fre"
                    }
                    alt={`Аватарка ${user.username}`}
                  />
                  &nbsp; {user.username}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
