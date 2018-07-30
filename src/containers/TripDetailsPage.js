import { connect } from 'react-redux'
import Trip from '../components/Trip'

import { getTripDetailsFromId } from '../actions'

function getTripById(trips, id) {
  return trips[id];
}

const mapStateToProps = (state, ownProps) => {
  
  const tripId = ownProps.match.params.id;
  const trip = getTripById(state.trips, tripId)

  return {
    tripId,
    trip
  }

}

const mapDispatchToProps = {
  getTripDetailsFromId 
}

const TripDetailsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip)

export default TripDetailsPage