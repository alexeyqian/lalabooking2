/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {store, persistor, history } from './store/configureStore';
import Root from './components/Root';
//import 'bootstrap';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.scss';

require('./favicon.ico'); // Tell webpack to load favicon.ico

//const store = configureStore();

render(
  <AppContainer>
    <Root history={history} store={store} persistor={persistor} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot history={history} store={store} persistor={persistor} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
