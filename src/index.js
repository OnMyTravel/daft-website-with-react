import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import AppRouter from './Router';
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(<AppRouter store={store}/>, document.getElementById('root'));
registerServiceWorker();
