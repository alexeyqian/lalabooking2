import * as ActionTypes from './actionTypes';

export default function hotelSearchReducer(state = [], action){
  switch (action.type){
    case ActionTypes.SEARCH_HOTELS_SUCCESS:
      return action.hotels;

    default:
      return state;
  }
}
