import React from 'react'

import '../styles/Trip.css';
import TripTimeline from './TripTimeline'

const Offline = ({
  tripId,
  trip,
  getTripDetailsFromId
}) => {
  return (
    <section className="hero is-fullheight">
      <div className="trip__frame">
        <div className="column is-paddingless timeline">
          <TripTimeline tripId={tripId} trip={trip} getTripDetailsFromId={getTripDetailsFromId} />
        </div>
        <div className="column trip__map is-two-thirds-desktop"></div>
      </div>
    </section>
  )
}

export default Offline
