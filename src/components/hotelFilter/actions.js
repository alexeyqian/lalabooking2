import {FILTER_HOTELS_SUCCESS} from "./actionTypes";
import HotelApi from '../../apiClient/mockHotelApi';
import {beginAjaxCall} from "../../actions/ajaxStatusActions";

export function filterHotelsSuccess(hotels){
  return {type: FILTER_HOTELS_SUCCESS, hotels};
}

// begin thunk

export function filterHotels(){
  return dispatch => {
    dispatch(beginAjaxCall());
    return HotelApi.getAllHotels().then(hotels => {
      dispatch(filterHotelsSuccess(hotels));
    }).catch(error => {throw(error);});
  };
}

// end of thunk
