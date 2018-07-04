import {SEARCH_HOTELS_SUCCESS} from "./actionTypes";
import HotelApi from '../../apiClient/mockHotelApi';
import {beginAjaxCall} from "../../actions/ajaxStatusActions";

export function searchHotelsSuccess(hotels){
  return {type: SEARCH_HOTELS_SUCCESS, hotels};
}

// begin thunk

export function searchHotels(){
  return dispatch => {
    dispatch(beginAjaxCall());
    return HotelApi.getAllHotels().then(hotels => {
      dispatch(searchHotelsSuccess(hotels));
    }).catch(error => {throw(error);});
  };
}

// end of thunk
