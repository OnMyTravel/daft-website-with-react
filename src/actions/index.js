import { START_FACEBOOK_AUTHENTICATION, FACEBOOK_AUTHENTICATION_FAILED } from './actiontypes'

let nextTodoId = 0

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

// Facebook
export const toogleUserConnectionStatus = () => ({
  type: 'LOG-USER'
})

export const logWithFacebook = () => {
  return function(dispatch) {
    dispatch({ 
      type: START_FACEBOOK_AUTHENTICATION
    })

    window.FB.login(function(response) {
      console.log(response)

      dispatch({ 
        type: FACEBOOK_AUTHENTICATION_FAILED
      })
    })
  }
}