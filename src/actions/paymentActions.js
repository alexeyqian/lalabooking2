import * as types from '../constants/actionTypes';
import paymentApi from '../apiClient/mockPaymentApi';
import {beginAjaxCall} from "./ajaxStatusActions";

export function createPaymentSuccess(payment){
  return {type: types.CREATE_PAYMENT_SUCCESS, payment};
}

// begin thunk functions

export function createPayment(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return paymentApi.createPayment().then(payment => {
      dispatch(createPaymentSuccess(payment));
    }).catch(error => {
      throw(error);
    });
  };
}

// end thunk functions
