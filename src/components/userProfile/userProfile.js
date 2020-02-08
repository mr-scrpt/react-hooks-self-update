import React, { useEffect, useState } from 'react';

import { useFetch } from 'hooks/useFetch';
import { NavLink } from 'react-router-dom';
import { UserArticle } from 'components/userArticle';


export const UserProfile = ({ match, location }) => {

  const { slug } = match.params;
  const apiInfoURL = `profiles/${slug}`
  const [{ response }, doFetch] = useFetch(apiInfoURL)
  const isFavorited = location.pathname.includes('favorited');

  // Инициализация
  useEffect(() => {
    doFetch()
  }, [doFetch, match]);



  if (!response) {
    return null;
  }

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={response.profile.image} alt="" className="user-img" />
              <h4>{response.profile.username}</h4>
              <p>{response.profile.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <NavLink
                    to={`/profiles/${response.profile.username}`}
                    className='nav-link'
                    exact>
                    Мои посты
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`/profiles/${response.profile.username}/favorited`}
                    className='nav-link'

                  >
                    Избранное
                  </NavLink>
                </li>
              </ul>
            </div>
            <UserArticle username={response.profile.username} location={location} isFavorited={isFavorited} url={match.url} />
            {/* isFavoreted={isFavoreted} */}
          </div>
        </div>
      </div >
    </div >
  )
}