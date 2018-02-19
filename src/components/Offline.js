import React from 'react'

import './Offline.css';

import roadImage from '../assets/road.jpg';
import world from '../assets/travel-tools.jpg';
import arc from '../assets/arc-de-triomphe.jpg';

const Offline = ({ todos, onTodoClick }) => {

  return (
  <div class="offline__wrapper">
    <div class="offline__container">
      <div class="offline__image">
        {/* <img src={arc} alt=""/> */}
      </div>
      <div class="offline__text">
        <h1 class="offline__text__title">On My travel</h1>
        {/* Pitch */}
        <p><strong>OnMyTravel</strong> est une plateforme de partage conçue par des voyageurs, pour les voyageurs.</p>
        <p>En quelques clics, permettez à vos proches de vous suivre pendant vos aventures.</p>
        <div class="offline__register">
          <a class="offline__button__fb">S'inscrire via Facebook</a>
        </div>
      </div>
    </div>
  </div>)
};

export default Offline
