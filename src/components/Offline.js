import React from 'react'

import './Offline.css'

const Offline = ({todos, onTodoClick}) => {

  return (
    <div className="offline__wrapper">
      <div className="offline__overlay">
        <div className="offline__container">

          <div className="offline__logo">
            On My Travel.
          </div>

          <div className="offline__content">
            <h2>Welcome to OnMyTravel</h2>
            <h1>A new way to share your travel experiences.</h1>
          </div>

        </div>
      </div>
    </div>)
}

export default Offline
