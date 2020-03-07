import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { fieldText, fieldShort } from "validators";
import { errorsList } from "helpers/errorsList";
export const ArticleForm = ({ onSubmit, error, initialValues = {} }) => {
  const { register, handleSubmit, errors } = useForm();

  /* const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [tagList, setTagList] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ title, description, body, tagList });
  };

  useEffect(() => {
    if (error) {
      const errors = errorsList(error);
      setErrors(errors);
    }
  }, [error]);

  useEffect(() => {
    if (!initialValues) return;
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setBody(initialValues.body);
    setTagList(initialValues.tagList.join(" "));
  }, [initialValues]);
 */
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
                    name="title"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Заголовок заметки"
                    defaultValue={initialValues.title}
                    //ref={fieldShort(register)}
                    ref={register}
                  />
                  {errors.title && (
                    <p>Заголовок должно быть не короче 4 символов</p>
                  )}
                </fieldset>
                <fieldset className="form-group">
                  <input
                    name="description"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Описание заметки"
                    defaultValue={initialValues.description}
                    //ref={fieldShort(register)}
                    ref={register}
                  />
                  {errors.description && (
                    <p>Краткое описание должно быть не короче 4 символов</p>
                  )}
                </fieldset>
                <fieldset>
                  <textarea
                    name="body"
                    className="form-control"
                    rows="8"
                    placeholder="Текст вашей заметки"
                    defaultValue={initialValues.body}
                    //ref={fieldText(register)}
                    ref={register}
                  ></textarea>
                  {errors.body && (
                    <p>
                      Краткое описание должно быть не короче 4 символов и не
                      длинее 1200
                    </p>
                  )}
                </fieldset>
                <fieldset className="form-group">
                  <input
                    name="tagList"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Теги"
                    defaultValue={initialValues.tagList}
                    //ref={fieldShort(register)}
                    ref={register}
                  />
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
