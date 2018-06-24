import {LOAD_MY_ORDERS_SUCCESS} from './actionTypes';
import OrderApi from '../../api/mockOrderApi';
import {beginAjaxCall} from "../../actions/ajaxStatusActions";

export function loadMyOrdersSuccess(orders){
  return {type: LOAD_MY_ORDERS_SUCCESS, orders};
}

// begin thunk functions

export function loadMyOrders(username){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return OrderApi.getMyOrders(username)
      .then(orders => {
        dispatch(loadMyOrdersSuccess(orders));
      })
      .catch(error => {
        throw(error);
      });
  };
}

// end thunk functions
