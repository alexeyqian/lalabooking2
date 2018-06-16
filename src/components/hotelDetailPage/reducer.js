import {LOAD_HOTEL_SUCCESS} from './actionTypes';

export default function hotelReducer(state={}, action){
  switch(action.type){
    case LOAD_HOTEL_SUCCESS:
      return {...state, ...action.hotel};

    default:
      return state;
  }

}
