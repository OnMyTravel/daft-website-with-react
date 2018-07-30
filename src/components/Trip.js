import React from 'react';
import './Trip.css';

const Trip = ({
  tripId,
  trip,
  getTripDetailsFromId
}) => {

  if(!trip) {
    getTripDetailsFromId(tripId)
  }

  return (
    <div className="trip__wrapper">
      <div className="content-padding">Back</div>

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
