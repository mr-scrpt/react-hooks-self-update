import React from "react";
import { PaginationItem } from "components/pagination";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import s from "./paginationLayout.module.scss";
export const PaginationLayout = ({ pages, url, currentPage }) => {
  console.log("pages", pages);

  return (
    <TransitionGroup className={s.pagination} component="ul">
      {pages &&
        pages.map((page, idx) => (
          <CSSTransition
            key={idx}
            timeout={1 * (idx + 1)}
            classNames={{
              appear: s.appear,
              appearActive: s.appearActive,
              appearDone: s.appearDone,
              enterDone: s.enterDone,
            }}
            appear={true}
          >
            <PaginationItem
              page={page}
              key={page}
              url={url}
              currentPage={currentPage}
              mix={s.item}
            />
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};
