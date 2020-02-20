import React from 'react';
import { isEmptyObject } from 'helpers/isEmptyObject';
export const ShowErrors = ({ errors }) => {
  if (!errors || isEmptyObject(errors)) return null;

  return <div>Ошибка!</div>
}