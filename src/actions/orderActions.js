import * as types from '../constants/actionTypes';
import orderApi from '../api/mockOrderApi';
import {beginAjaxCall} from "./ajaxStatusActions";

export function createOrderSuccess(order){
  return {type: types.CREATE_ORDER_SUCCESS, order};
}

export function cancelOrderSuccess(order){
  return {type: types.CANCEL_ORDER_SUCCESS, order};
}

// begin thunk functions

export function createOrder(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return orderApi.createOrder().then(order => {
      dispatch(createOrderSuccess(order));
    }).catch(error => {
      throw(error);
    });
  };
}

export function cancelOrder(id){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return orderApi.cancelOrder(id)
      .then(order => {
        dispatch(cancelOrderSuccess(order));
      })
      .catch(error => {
        throw(error);
      });
  };
}

// end thunk functions
