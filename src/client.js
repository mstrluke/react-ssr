import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component'

import App from './App';

const entry = document.getElementById('root');
const Main = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (module.hot) {
  ReactDOM.render(<Main />, entry);
  module.hot.accept(App);
} else {
  loadableReady(() => {
    ReactDOM.hydrate(<Main />, entry);
  });
}
