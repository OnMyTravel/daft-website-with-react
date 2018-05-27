import { combineReducers } from 'redux';
import CounterReducers from './counters';
import UserReducers from './userReducers';

const todoApp = combineReducers({
  CounterReducers,
  user: UserReducers
})

export default todoApp