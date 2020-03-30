import React from "react";
import { errorsList } from "helpers/errorsList";
export const FormErrorServer = ({ errors }) => {
  return (
    <>
      {errors && (
        <ul className="error-messages">
          {errorsList(errors).map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};
