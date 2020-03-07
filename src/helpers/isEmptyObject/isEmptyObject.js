export const isEmptyObject = obj =>
  Object.entries(obj).length === 0 && obj.constructor === Object ? true : false;

//Object.entries(obj).length === 0
