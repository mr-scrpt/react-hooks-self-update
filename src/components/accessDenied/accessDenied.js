import React from "react";
import { Link } from "react-router-dom";

export const AcceesDenied = () => {
  return (
    <div className="container">
      <h1>Страница с ограниченным доступом</h1>
      <p>
        Попробуйте <Link to="/login">авторизироватся</Link> или{" "}
        <Link to="/registration">зарегистрироватся</Link>
      </p>
    </div>
  );
};
