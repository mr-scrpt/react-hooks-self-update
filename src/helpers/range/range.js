export const range = (start, end) => {
  let arr = [...Array(end).keys()].map((el) => el + start);
  /* console.log("-> max", max); */
  /* const isMax = arr.find((item) => item > 50); */
  /*  const isMax = arr.indexOf(50);
  if (isMax) {
    return arr.slice(0, isMax - 1);
  }
 */
  return arr;
};
