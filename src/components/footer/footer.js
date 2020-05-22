import React from "react";
import s from "./footer.module.css";
import { Logo } from "@cm/logo";
import cx from "classnames";
export const Footer = ({ mixin }) => {
  const footerClass = cx(
    {
      [s.footer]: true,
    },
    mixin
  );
  return (
    <div className={footerClass}>
      <div className={s.footer__wrapper}>
        <div className={s.footer__inner}>
          <div className={s.footer__info}>
            <p className={s.footer__slogan}>
              Сайт создан в учебных целях. В рамках курса по React
            </p>
            <div className={s.footer__copyright}>
              <i className={`material-icons ${s.footer__icon}`}>copyright</i>
              <p className={s.footer__text}>Все права защищены - 2020 год.</p>
            </div>
          </div>
          <div className={s.footer__logo}>
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};
