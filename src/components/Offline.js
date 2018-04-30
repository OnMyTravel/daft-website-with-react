import React from 'react'

import './Offline.css';

const Offline = ({ todos, onTodoClick }) => {

  return (
  <div className="offline__wrapper">
    <div className="offline__container">
      <div className="offline__image">
        {/* <img src={arc} alt=""/> */}
      </div>
      <div className="offline__text">
        <h1 className="offline__text__title">On My travel</h1>
        {/* Pitch */}
        <p><strong>OnMyTravel</strong> est une plateforme de partage conçue par des voyageurs, pour les voyageurs.</p>
        <p>En quelques clics, permettez à vos proches de vous suivre pendant vos aventures.</p>
        <div className="offline__register">
          <a className="offline__button__fb">S'inscrire via Facebook</a>
        </div>
      </div>
    </div>
  </div>)
};

export default Offline
