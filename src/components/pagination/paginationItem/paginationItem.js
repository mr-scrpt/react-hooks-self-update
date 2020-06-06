import React from "react";
import { Link } from "react-router-dom";

import cx from "classnames";

export const PaginationItem = ({
  page,
  currentPage,
  url,
  mix,
  name,
  classItem,
  classItemActive,
  classLink,
  classLinkActive,
}) => {
  const isActivePage = page === currentPage;

  const itemClasses = cx({
    [classItem]: true,
    [classItemActive]: isActivePage,
  });

  const linkClasses = cx({
    [classLink]: true,
    //[s.islink]: !isActivePage,
    [classLinkActive]: isActivePage,
  });
  const urlLink = page === 1 ? `${url}` || `/` : `${url}?page=${page}`;

  return (
    <li className={itemClasses}>
      {isActivePage ? (
        <span className={linkClasses}>{name}</span>
      ) : (
        <Link to={urlLink} className={linkClasses}>
          {name}
        </Link>
      )}
    </li>
  );
};
