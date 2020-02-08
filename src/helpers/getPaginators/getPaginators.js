import { limit } from 'constant';
import { parse } from 'query-string';

export const getPaginators = search => {

  const parsedSearch = parse(search);
  const currentPage = parsedSearch.page ? Number(parsedSearch.page) : 1
  const offset = currentPage * limit - limit;


  return { currentPage, offset }
}