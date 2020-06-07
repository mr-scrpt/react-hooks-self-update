import React from "react";

export const ShowErrors = ({ errors }) => {
  if (!errors) return null;
  console.log("-> errores", errors);
  return <div>{errors}</div>;
};
