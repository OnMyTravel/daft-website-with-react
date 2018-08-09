import React from 'react';
import Day from './Day'

import '../styles/TripTimeline.css';

const Trip = ({
  tripId,
  trip,
  days = [],
  reloadAction
}) => {

  const daysElement = []
  const nbOfDays = days.length;
  days.reverse().forEach((day, index) => {
    const dayRender = (
      <Day id={nbOfDays - index} key={index} day={day} />
    );

    daysElement.push(dayRender)
  })

  const tripDescription = (!trip) ?
    (<div className="content-padding">Loading</div>)
    : (<div className="description">{trip.description}</div>)

  return (
    <div className="timeline__wrapper">

        <span className="icon is-large" size="large" onClick={() => reloadAction(tripId)}>
          <ion-icon name="refresh"></ion-icon> reload
        </span>

      {tripDescription}

      {daysElement}

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
