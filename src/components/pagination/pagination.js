import React from 'react';
import { range } from 'helpers/range';
import { PaginationLayout } from './paginationLayout';


export const Pagination = ({ total, limit, url, currentPage }) => {
  const pagesCout = Math.ceil(total / limit);
  const pages = range(1, pagesCout);

  return <PaginationLayout pages={pages} currentPage={currentPage} url={url} />
}