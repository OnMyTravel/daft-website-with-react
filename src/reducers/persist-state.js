import { REHYDRATE } from 'redux-persist'

import API from '../services/API'

const persistState = (state = {}, action) => {
  switch (action.type) {
    case REHYDRATE:

      if(action.payload.user) {
        API.setToken(action.payload.user.api_token)
      }

    return Object.assign({}, state, {});

    default:
      return state
  }
}

export default persistState