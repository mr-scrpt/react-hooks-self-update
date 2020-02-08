import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from 'contexts';

export const FeedToggler = ({ tagName }) => {
  const [currentUser] = useContext(CurrentUserContext);

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outlin outline-active">
        {
          currentUser && currentUser.isLoggedIn && (
            <li className="nav-item">
              <NavLink to='/feed' className='nav-link'>Ваши фиды</NavLink>
            </li>
          )
        }
        <li className="nav-item">
          <NavLink to='/' className='nav-link' exact>Все фиды</NavLink>
        </li>
        {
          tagName && (
            <li className="nav-item">
              <NavLink to={`/tags/${tagName}`} className='nav-link' exact>
                <i className="ion-pound"></i>
                {tagName}
              </NavLink>
            </li>
          )
        }
      </ul>
    </div>
  )
}