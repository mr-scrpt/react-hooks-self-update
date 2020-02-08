import React from 'react';

export const ShowLoading = ({ loading }) => {
  if (!loading) return null;
  return <div>Загрузка...</div>
}