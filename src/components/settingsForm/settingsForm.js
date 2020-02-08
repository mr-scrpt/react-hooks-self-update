import React, { useState, useEffect } from 'react';

import { useLocalStorage } from 'hooks/useLocalStorage';

export const SettingsForm = ({ user, dispatchUser, setIsSubmit, setIsLogout }) => {

  const [, setToken] = useLocalStorage('token');

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


  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <fieldset className='form-group'>
            <input
              type="text"
              placeholder='Фото'
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
              className='form-control form-control-lg'
            />
          </fieldset>

          <fieldset className='form-group'>
            <input
              type="text"
              placeholder='Имя пользователя'
              value={username}
              onChange={e => setUsername(e.target.value)}
              className='form-control form-control-lg'
            />
          </fieldset>

          <fieldset className='form-group'>
            <textarea
              placeholder='Биография'
              value={bio}
              onChange={e => setBio(e.target.value)}
              row='8'
              className='form-control form-control-lg'
            >
            </textarea>
          </fieldset>

          <fieldset className='form-group'>
            <input
              type="email"
              placeholder='Почта пользователя'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='form-control form-control-lg'
            />
          </fieldset>

          <fieldset className='form-group'>
            <input
              type="newPassword"
              placeholder='Новый пароль пользователя'
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className='form-control form-control-lg'
            />
          </fieldset>
          <fieldset className='form-group'>
            <button type="submit" className='btn btn-lg btn-primary pull-xs-right'>Обновить данные</button>
          </fieldset>
        </fieldset>
      </form>
      <hr />
      <button className="btn btn-outline-danger" onClick={logout}>Выйти</button>
    </>

  )
}