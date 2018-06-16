import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import {reducer as query} from '../components/homePage';
import {reducer as hotels} from '../components/hotelSearchPage';
import {reducer as hotel} from '../components/hotelDetailPage';

const rootReducer = combineReducers({
  routing,
  ajaxCallsInProgress,
  query,
  hotels,
  hotel
});

/*
function rootReducer(state = initialStore, action){
  return {
    routing: routerReducer(state.routing, action),
    ajaxCallsInProgress: ajaxCallsInProgress(state.ajaxCallsInProgress, action),
    query,
    hotels,
  };
}*/

export default rootReducer;
