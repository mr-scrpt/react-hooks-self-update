export const range = (start, end) =>
  [...Array(end).keys()].map((el) => el + start);
