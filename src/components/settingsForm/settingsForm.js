import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { fieldText, fieldShort } from "validators";
import { errorsList } from "helpers/errorsList";

export const SettingsForm = ({ user, onSubmit, logout, error }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <>
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
              name="photoURL"
              placeholder="URL Фото"
              defaultValue={user.image}
              className="form-control form-control-lg"
              //ref={fieldShort(register)}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Имя пользователя"
              defaultValue={user.username}
              className="form-control form-control-lg"
              ref={fieldShort(register)}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </fieldset>

          <fieldset className="form-group">
            <textarea
              name="bio"
              placeholder="Биография"
              defaultValue={user.bio}
              row="8"
              className="form-control form-control-lg"
              ref={fieldText(register)}
            ></textarea>
            {errors.bio && <p>{errors.bio.message}</p>}
          </fieldset>

          <fieldset className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Имя пользователя"
              defaultValue={user.email}
              className="form-control form-control-lg"
              ref={fieldShort(register)}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </fieldset>

          <fieldset className="form-group">
            <input
              type="password"
              name="newPassword"
              placeholder="Новый пароль пользователя"
              className="form-control form-control-lg"
              ref={fieldShort(register)}
            />
            {errors.newPassword && <p>{errors.newPassword.message}</p>}
          </fieldset>
          <fieldset className="form-group">
            <button
              type="submit"
              className="btn btn-lg btn-primary pull-xs-right"
            >
              Обновить данные
            </button>
          </fieldset>
        </fieldset>
      </form>
      <hr />
      <button className="btn btn-outline-danger" onClick={logout}>
        Выйти
      </button>
    </>
  );
};

/* const [, setToken] = useLocalStorage('token');

  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');


  useEffect(() => {
    if (!user.isLoggedIn) return;
    setAvatar(user.currentUser.image || '');
    setUsername(user.currentUser.username || '');
    setBio(user.currentUser.bio || '');
    setEmail(user.currentUser.email || '');


  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatchUser({ type: 'CHANGE_USER', payload: { avatar, username, bio, email, newPassword } })
    setIsSubmit(true)
  }

  const logout = (e) => {
    e.preventDefault()
    setToken('');
    dispatchUser({ type: 'LOGOUT_USER' });
    setTimeout(() => {
      setIsLogout(true);
    }, 0)

  }
 */
