import React from "react";
import { useForm } from "react-hook-form";
import { fieldText, fieldShort } from "validators";

export const FormArticle = ({ onSubmit, initialValues = {} }) => {
  const { register, handleSubmit, errors: errorsForm } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Заголовок заметки"
            className="form-control form-control-lg"
            defaultValue={initialValues.title}
            ref={fieldShort(register)}
          />
          {errorsForm.title && <p>{errorsForm.title.message}</p>}
        </fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            name="description"
            placeholder="Описание заметки"
            className="form-control form-control-lg"
            defaultValue={initialValues.description}
            ref={fieldShort(register)}
          />
          {errorsForm.description && <p>{errorsForm.description.message}</p>}
        </fieldset>
        <fieldset>
          <textarea
            name="body"
            placeholder="Текст вашей заметки"
            className="form-control"
            rows="8"
            defaultValue={initialValues.body}
            ref={fieldText(register)}
          ></textarea>
          {errorsForm.body && <p>{errorsForm.body.message}</p>}
        </fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            name="tagList"
            placeholder="Теги"
            className="form-control form-control-lg"
            defaultValue={initialValues.tagList}
            ref={fieldShort(register)}
          />
          {errorsForm.tagList && <p>{errorsForm.tagList.message}</p>}
        </fieldset>
        <fieldset>
          <button
            type="submit"
            className="btn btn-lg pull-xs-right btn-primary"
          >
            Опубликовать заметку
          </button>
        </fieldset>
      </fieldset>
    </form>
  );
};
