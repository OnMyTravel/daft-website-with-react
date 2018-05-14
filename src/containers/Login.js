import { connect } from 'react-redux'
import Login from '../components/Login'

import { logWithFacebook } from '../actions'

const getVisibleTodos = (todos, filter) => {
  return [{ message: 'TOTO' }]
}

const mapStateToProps = (state) => ({
  facebookStatus: state.user.facebookStatus,
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  logWithFacebook: logWithFacebook
}

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginPage