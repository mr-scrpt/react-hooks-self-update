import React from 'react';
import s from './debug.module.css';
export const Debug = ({ show }) => {

  if (!show) return false;

  return (
    <div className={s.debug}>
      <div className={s.ddd}>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
