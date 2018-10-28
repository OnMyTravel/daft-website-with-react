import React from 'react'

import '../styles/ExploreTrips.css';

const ExploreTrips = () => {

  return (
    <section className="hero is-fullheight exploreTrip__frame">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">Rejoindre une aventure ...</h1>
          
          <div className="code_form">
            <label for="travelId">Pour accéder à un voyage, saisissez son code ci-dessous</label>
            <input className="input" id="travelId"/>
            <a className="button is-primary">C'est parti</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreTrips