import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function hotelReducer(state=initialState, action){
  switch(action.type){
    case types.LOAD_HOTELS_SUCCESS:
      return Object.assign({}, state, {hotels: action.hotels});
    case types.LOAD_HOTEL_SUCCESS:
      return Object.assign({}, state, {hotel: action.hotel});
    default:
      return state;
  }

}
