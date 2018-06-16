import {FILTER_HOTELS_SUCCESS} from './actionTypes';

export default function hotelFilterReducer(state = [], action){
  switch (action.type){
    case FILTER_HOTELS_SUCCESS:
      return Object.assign({}, state, {hotels: action.hotels});

    default:
      return state;
  }
}
