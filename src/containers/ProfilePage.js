import { connect } from 'react-redux'

import Profile from '../components/Profile'

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {}

const ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

export default ProfilePage
