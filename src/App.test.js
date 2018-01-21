import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './containers/App';
import { MemoryRouter } from 'react-router';

test('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  , div);

  ReactDOM.unmountComponentAtNode(div);
});