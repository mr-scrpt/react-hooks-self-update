import React, { useState, useEffect } from 'react';
import { errorsList } from 'helpers/errorsList';

export const ArticleForm = ({ onSubmit, error, initialValues }) => {
  const [errors, setErrors] = useState([])
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [tagList, setTagList] = useState('');
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ title, description, body, tagList });
  }

  useEffect(() => {
    if (error) {
      const errors = errorsList(error)
      setErrors(errors)
    }
  }, [error])

  useEffect(() => {
    if (!initialValues) return
    setTitle(initialValues.title)
    setDescription(initialValues.description)
    setBody(initialValues.body)
    setTagList(initialValues.tagList.join(' '))
  }, [initialValues]);


  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            {errors && (
              <ul className="error-messages">
                {errors.map(item => <li key={item}>{item}</li>)}
              </ul>
            )}
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Заголовок заметки"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Описание заметки"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Текст вашей заметки"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Теги"
                    value={tagList}
                    onChange={e => setTagList(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <button
                    type="submit"
                    className='btn btn-lg pull-xs-right btn-primary'
                  >Опубликовать заметку</button>
                </fieldset>
              </fieldset>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}