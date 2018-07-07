import * as ActionTypes from "./actionTypes";
import HotelApi from '../../apiClient/mockHotelApi';
import {beginAjaxCall} from "../../actions/ajaxStatusActions";

export function searchHotelsSuccess(hotels){
  return {type: ActionTypes.SEARCH_HOTELS_SUCCESS, hotels};
}

// begin thunk

export function searchHotels(query){
  return dispatch => {
    dispatch(beginAjaxCall());

    HotelApi.search(query)
      .then(hotels => {
        dispatch(searchHotelsSuccess(hotels));
      });

  };
}

// end of thunk
