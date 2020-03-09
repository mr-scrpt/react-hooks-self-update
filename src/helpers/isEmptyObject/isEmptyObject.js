export const isEmptyObject = obj =>
  obj.constructor === Object && Object.entries(obj).length === 0 ? true : false;
