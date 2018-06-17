import {CREATE_ORDER_SUCCESS} from './actionTypes';

export default function createOrderReducer(state = {}, action){
  switch (action.type){
    case CREATE_ORDER_SUCCESS:
      return action.order;

    default:
      return state;
  }
}
