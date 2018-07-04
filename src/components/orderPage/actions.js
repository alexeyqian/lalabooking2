import * as types from './actionTypes';
import orderApi from '../../apiClient/mockOrderApi';
import {beginAjaxCall} from "../../actions/ajaxStatusActions";

export function createOrderSuccess(order){
  return {type: types.CREATE_ORDER_SUCCESS, order};
}

export function cancelOrderSuccess(order){
  return {type: types.CANCEL_ORDER_SUCCESS, order};
}

// begin thunk functions

export function createOrder(order){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return orderApi.createOrder(order).then(order => {
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
