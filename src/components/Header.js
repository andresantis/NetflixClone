import React from "react";
import "../styles/Header.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {

  return (
    <header className={black ? 'black' : ''}>
        <div className="header--logo">
            <a href="/">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix"></img>
            </a>
        </div>
        <div className="header--user">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile img"></img>
            </a>
        </div>
    </header>
  );
};
