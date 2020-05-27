import React from "react";
import { range } from "helpers/range";
import { PaginationLayout } from "components/pagination";

export const Pagination = ({ total, limit, url, currentPage }) => {
  const pageLast = Math.ceil(total / limit); //50

  const pagesShowLimit = 10; /* TODO передавать праметрами */
  const pagesMoveLimit = 6; /* TODO передавать праметрами */

  const pageLastStart = pageLast - pagesShowLimit + 1;
  const pageLastMove = pageLast - pagesMoveLimit;

  let start, offset;

  if (currentPage < pagesMoveLimit) {
    start = 1;
    offset = pagesShowLimit;
  } else {
    if (currentPage >= pageLast - pagesShowLimit) {
      start = pageLast - pagesShowLimit + 1;
      offset = pagesShowLimit;
    } else {
      start = currentPage - pagesMoveLimit + 1;
      offset = pagesShowLimit;
    }
    if (currentPage <= pageLast - pagesMoveLimit) {
      start = currentPage - pagesMoveLimit + 1;

      offset = pagesShowLimit;
    }
  }
  const pagesRange = range(start, offset);

  if (!total) return null;
  return (
    <PaginationLayout pages={pagesRange} currentPage={currentPage} url={url} />
  );
};
