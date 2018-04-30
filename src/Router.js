import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import App from './containers/App';
import Profile from './containers/Profile';
import OfflinePage from './containers/OfflinePage';
import ChartePage from './containers/ChartePage';
import Homepage from './containers/Homepage';

const AppRouter = ({ store }) => (
  <Provider store={store}>
    <Router>
        <div id="router">
          {/* <div>Any code written here will be executed for every page</div> */}
          <Route exact path="/" component={OfflinePage}/>
          <Route exact path="/default" component={App}/>
          <Route exact path="/profile" component={Profile}/>

          <Route exact path="/charte" component={ChartePage}/>

          <Route exact path="/map" component={Homepage}/>
        </div>
    </Router>
  </Provider>
)

AppRouter.propTypes = {
  store: PropTypes.object.isRequired
}

export default AppRouter;
