/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
//import 'bootstrap';
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";
import {loadHotels} from "./actions/hotelActions";

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.scss';

require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();
store.dispatch(loadAuthors());
store.dispatch(loadCourses());
store.dispatch(loadHotels());

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
