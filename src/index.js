import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

import AppRouter from './Router';
import reducers from './reducers'

let store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<AppRouter store={store}/>, document.getElementById('root'));
registerServiceWorker();
