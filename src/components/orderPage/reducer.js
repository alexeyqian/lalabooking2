import * as ActionTypes from './actionTypes';

export default function createOrderReducer(state = {}, action){
  switch (action.type){
    case ActionTypes.CREATE_ORDER_SUCCESS:
      return action.order;

    default:
      return state;
  }
}
