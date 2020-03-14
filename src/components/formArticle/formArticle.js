import React from "react";
import { useForm } from "react-hook-form";
import { fieldText, fieldShort } from "validators";
import { errorsList } from "helpers/errorsList";
export const FormArticle = ({ onSubmit, errorsServer, initialValues = {} }) => {
  const { register, handleSubmit, errors: errorsForm } = useForm();

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            {errorsServer && (
              <ul className="error-messages">
                {errorsList(errorsServer).map(item => (
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
                    //ref={fieldShort(register)}
                    ref={register}
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
                  {errorsForm.description && (
                    <p>{errorsForm.description.message}</p>
                  )}
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
          </div>
        </div>
      </div>
    </div>
  );
};
