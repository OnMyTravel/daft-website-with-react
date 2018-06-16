import { combineReducers } from 'redux';
import UserReducers from './userReducers';
import ConnexionReducers from './connexionReducers';
import persistState from './persist-state';

const todoApp = combineReducers({
  user: UserReducers,
  connexion: ConnexionReducers,
  persistState: persistState
})

export default todoApp