import {LOAD_HOTEL_SUCCESS} from './actionTypes';
import hotelApi from '../../apiClient/mockHotelApi';
import {beginAjaxCall} from "../../actions/ajaxStatusActions";

export function loadHotelSuccess(hotel){
  return {type: LOAD_HOTEL_SUCCESS, hotel};
}

// begin thunk functions

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
