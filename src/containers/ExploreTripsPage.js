import { connect } from 'react-redux'
import ExploreTrips from '../components/ExploreTrips'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

const ExploreTripsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreTrips)

export default ExploreTripsPage