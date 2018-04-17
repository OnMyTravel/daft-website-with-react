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

const AppRouter = ({ store }) => (
  <Provider store={store}>
    <Router>
        <div>
          {/* <div>Any code written here will be executed for every page</div> */}
          <Route exact path="/" component={OfflinePage}/>
          <Route exact path="/default" component={App}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/charte" component={ChartePage}/>
        </div>
    </Router>
  </Provider>
)

AppRouter.propTypes = {
  store: PropTypes.object.isRequired
}

export default AppRouter;
