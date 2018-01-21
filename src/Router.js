import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './containers/App';
import Profile from './containers/Profile';

const AppRouter = () => (
  <Router>
      <div>
        <div>Element which is displayed for everypage</div>
        <Route exact path="/" component={App}/>
        <Route exact path="/profile" component={Profile}/>
      </div>
  </Router>
)

export default AppRouter;
