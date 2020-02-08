import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const PaginationItem = ({ page, currentPage, url }) => {

  const isActivePage = page === currentPage;

  const pageClasses = classNames({
    'page-item': true,
    'active': isActivePage
  })
  const urlLink = page === 1 ? (`${url}` || `/`) : `${url}?page=${page}`;


  return <li className={pageClasses}>
    {
      isActivePage
        ? <span className="page-link">{page}</span>
        : <Link to={urlLink} className="page-link">{page}</Link>
    }

  </li>
}