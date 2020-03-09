import React from "react";

export const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <img src={user.image} alt="" className="user-img" />
            <h4>{user.username}</h4>
            <p>{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
