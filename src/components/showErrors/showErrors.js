import React from 'react';

export const ShowErrors = ({ errors }) => {
  if (!errors) return null;
  return <div>Ошибка!</div>
}