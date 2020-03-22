import React from "react";
import { Link } from "react-router-dom";
export const BarEditor = ({ slug, articleDelete }) => {
  return (
    <>
      <span>
        <Link
          to={`/articles/${slug}/edit`}
          className="btn btn-outline-secondary btn-sm"
        >
          <i className="ion-edit"></i>
          Редактировать
        </Link>
        &nbsp;
        <button
          onClick={articleDelete}
          className="btn btn-outline-danger btn-sm"
        >
          <i className="ion-trash-a"></i>
          Удалить
        </button>
      </span>
    </>
  );
};
