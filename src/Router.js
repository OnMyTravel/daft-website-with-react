import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import ProfilePage from './containers/ProfilePage';
import LoginPage from './containers/LoginPage';
import OfflinePage from './containers/OfflinePage';
import ChartePage from './containers/ChartePage';
import Homepage from './containers/Homepage';

import Navbar from './components/Navbar';

const AppRouter = ({ store }) => (
  <Provider store={store}>
    <Router>
        <div id="router">
          <Navbar />
          {/* <div>Any code written here will be executed for every page</div> */}
          <Route exact path="/" component={OfflinePage}/>
          <Route exact path="/log-in" component={LoginPage}/>
          <Route exact path="/charte" component={ChartePage}/>
          <Route exact path="/map" component={Homepage}/>
          <Route exact path="/profile" component={ProfilePage}/>
        </div>
    </Router>
  </Provider>
)

AppRouter.propTypes = {
  store: PropTypes.object.isRequired
}

export default AppRouter;
