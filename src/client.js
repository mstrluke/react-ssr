import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const entry = document.getElementById('root');
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  entry
);

if (module.hot) module.hot.accept(App);
