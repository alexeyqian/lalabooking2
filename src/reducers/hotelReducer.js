import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function hotelReducer(state=initialState.hotels, action){
  switch(action.type){
    case types.LOAD_HOTELS_SUCCESS:
      return action.hotels;
    case types.LOAD_HOTEL_SUCCESS:
      return Object.assign({}, state, {hotel: action.hotel});
    case types.UPDATE_HOTEL_QUERY:
      return Object.assign({}, state, {query: action.query});
    default:
      return state;
  }

}
