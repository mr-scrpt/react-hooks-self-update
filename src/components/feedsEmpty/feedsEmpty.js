import React from "react";

export const FeedsEmpty = length => {
  if (length) return null;
  return <div>Фидов не найдено! Попробуйте повторить попытку позже</div>;
};
