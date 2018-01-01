import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import courses from './courseReducer';
import authors from './authorReducer';
import hotels from './hotelReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';

import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  hotels,
  fuelSavings,
  authors,
  courses,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;
