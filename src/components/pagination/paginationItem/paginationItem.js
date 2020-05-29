import React from "react";
import { Link } from "react-router-dom";
import s from "./paginationItem.module.scss";
import cx from "classnames";

export const PaginationItem = ({ page, currentPage, url, mix, loading }) => {
  const isActivePage = page === currentPage;

  /*   const pageClasses = cx({
    [s.item]: true,
    [s.active]: isActivePage,
    mix,
  }); */
  const pageClasses = cx(
    {
      [s.item]: true,
      [s.active]: !loading && isActivePage,
    },
    mix
  );

  const linkClasses = cx({
    [s.link]: true,
    [s.islink]: !isActivePage,
    [s.notAlink]: isActivePage,
  });
  const urlLink = page === 1 ? `${url}` || `/` : `${url}?page=${page}`;

  return (
    <li className={pageClasses}>
      {isActivePage ? (
        <span className={linkClasses}>{page}</span>
      ) : (
        <Link to={urlLink} className={linkClasses}>
          {page}
        </Link>
      )}
    </li>
  );
};
