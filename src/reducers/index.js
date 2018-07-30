import { combineReducers } from 'redux';
import UserReducers from './userReducers';
import ConnexionReducers from './connexionReducers';
import TripReducers from './tripReducers';
import persistState from './persist-state';

const todoApp = combineReducers({
  user: UserReducers,
  connexion: ConnexionReducers,
  trips:  TripReducers,
  persistState: persistState
})

export default todoApp