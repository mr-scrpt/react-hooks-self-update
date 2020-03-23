import React from "react";
import { CSSTransition } from "react-transition-group";

export const WithAnimationFlash = ({ children }) => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={400}
      classNames="flash"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};
