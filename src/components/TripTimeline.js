import React from 'react';
import './TripTimeline.css';

const Trip = ({
  tripId,
  trip,
  getTripDetailsFromId
}) => {

  if(!trip) {
    getTripDetailsFromId(tripId)
  }

  return (
    <div className="timeline__wrapper">
      
      <span className="icon is-large" size="large" onClick={() => getTripDetailsFromId(tripId)}>
        <ion-icon name="refresh"></ion-icon>
      </span>
      

      <div className="content-padding">
        {trip.description}
      </div>

      <div className="date-marker">
        Day 1
      </div>

      {/* <p className="content-padding">
        {trip.steps[0].content}
      </p>

      <div className="content-padding">
        <Location name="Central Park" address="5th Avenue, New York City, NY 10022" />
      </div>

      <p className="content-padding">
        {trip.steps[1].content}
      </p>

      <p className="content-padding">
        {trip.steps[2].content}
      </p> */}
      
    </div>
  );
}

export default Trip;
