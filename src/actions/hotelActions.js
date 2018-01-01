import * as types from '../constants/actionTypes';
import hotelApi from '../api/mockHotelApi';
import {beginAjaxCall} from "./ajaxStatusActions";


export function loadHotelsSuccess(hotels) {
  return {type: types.LOAD_HOTELS_SUCCESS, hotels};
}
export function loadHotelSuccess(hotel){
  return {type: types.LOAD_HOTEL_SUCCESS, hotel};
}

// begin thunk functions

export function loadHotels(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return hotelApi.getAllHotels().then(hotels => {
      dispatch(loadHotelsSuccess(hotels));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadHotelById(id){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return hotelApi.getHotelById(id)
      .then(hotel => {
        dispatch(loadHotelSuccess(hotel));
      })
      .catch(error => {
        throw(error);
      });
  };
}

// end thunk functions
