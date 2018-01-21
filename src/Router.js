import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './containers/App';
import Profile from './containers/Profile';
import Offline from './containers/Offline';

const AppRouter = () => (
  <Router>
      <div>
        {/* <div>Any code written here will be executed for every page</div> */}
        <Route exact path="/" component={Offline}/>
        <Route exact path="/default" component={App}/>
        <Route exact path="/profile" component={Profile}/>
      </div>
  </Router>
)

export default AppRouter;
