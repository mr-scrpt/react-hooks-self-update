import React from "react";
import { useForm } from "react-hook-form";
import { fieldText, fieldShort } from "validators";
import { errorsList } from "helpers/errorsList";
export const ArticleForm = ({ onSubmit, error, initialValues = {} }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            {error && (
              <ul className="error-messages">
                {errorsList(error).map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
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
                  {errors.title && <p>{errors.title.message}</p>}
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
                  {errors.description && <p>{errors.description.message}</p>}
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
                  {errors.body && <p>{errors.title.body}</p>}
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
                  {errors.tagList && <p>{errors.title.tagList}</p>}
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
          </div>
        </div>
      </div>
    </div>
  );
};
