import React from 'react';
import { PaginationItem } from './paginationItem';
export const PaginationLayout = ({ pages, url, currentPage }) => {
  return (
    <ul className='pagination'>
      {pages && pages.map(page => (
        <PaginationItem page={page} key={page} url={url} currentPage={currentPage} />
      ))}
    </ul>
  );
}