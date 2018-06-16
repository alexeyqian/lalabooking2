import {SEARCH_HOTELS_SUCCESS} from './actionTypes';

export default function hotelSearchReducer(state = [], action){
  switch (action.type){
    case SEARCH_HOTELS_SUCCESS:
      return [...state, ...action.hotels];

    default:
      return state;
  }
}