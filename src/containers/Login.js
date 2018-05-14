import { connect } from 'react-redux'
import Login from '../components/Login'

import { toogleUserConnectionStatus } from '../actions'

const getVisibleTodos = (todos, filter) => {
  return [{ message: 'TOTO' }]
}

const mapStateToProps = (state) => ({
  userStatus: state.user.status,
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  toogleUserConnectionStatus: toogleUserConnectionStatus
}

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginPage