import React from "react";
import { range } from "helpers/range";
import { PaginationLayout } from "components/pagination";

export const Pagination = ({ total, limit, url, currentPage }) => {
  const pagesCout = Math.ceil(total / limit);
  const pages = range(1, pagesCout);
  if (pages.length <= 1) return null;

  return <PaginationLayout pages={pages} currentPage={currentPage} url={url} />;
};
