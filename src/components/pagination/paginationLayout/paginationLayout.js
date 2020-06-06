import React from "react";
import { PaginationItem } from "components/pagination";

import s from "./paginationLayout.module.css";
export const PaginationLayout = ({
  pages,
  url,
  currentPage,
  pagePrev,
  pageNext,
  pageLast,
  pageFirst,
}) => {
  return (
    <ul className={s.pagination}>
      {currentPage !== 1 && (
        <>
          <PaginationItem
            name="&laquo;"
            page={pageNext}
            url={url}
            currentPage={currentPage}
            classItem={s.pagination__item}
            classItemActive={s.pagination__item_active}
            classLink={s.pagination__link}
            classLinkActive={s.pagination__link_active}
          />
          <PaginationItem
            name="Первая"
            page={1}
            url={url}
            currentPage={currentPage}
            classItem={s.pagination__item}
            classItemActive={s.pagination__item_active}
            classLink={s.pagination__link}
            classLinkActive={s.pagination__link_active}
          />
        </>
      )}
      {pages &&
        pages.map((page, idx) => (
          <PaginationItem
            name={page}
            page={page}
            key={page}
            url={url}
            currentPage={currentPage}
            classItem={s.pagination__item}
            classItemActive={s.pagination__item_active}
            classLink={s.pagination__link}
            classLinkActive={s.pagination__link_active}
          />
        ))}
      {currentPage !== pageLast && (
        <>
          <PaginationItem
            name="&raquo;"
            page={pageNext}
            url={url}
            currentPage={currentPage}
            classItem={s.pagination__item}
            classItemActive={s.pagination__item_active}
            classLink={s.pagination__link}
            classLinkActive={s.pagination__link_active}
          />
          <PaginationItem
            name="Последняя"
            page={pageLast}
            url={url}
            currentPage={currentPage}
            classItem={s.pagination__item}
            classItemActive={s.pagination__item_active}
            classLink={s.pagination__link}
            classLinkActive={s.pagination__link_active}
          />
        </>
      )}
    </ul>
  );
};
