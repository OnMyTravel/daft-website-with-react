import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import AppRouter from './Router';
import reducers from './reducers'

let store = createStore(reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(<AppRouter store={store}/>, document.getElementById('root'));
registerServiceWorker();
