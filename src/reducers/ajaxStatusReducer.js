import * as ActionTypes from '../constants/actionTypes';

function actionTypeEndsInSuccess(type){
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStateReducer(state = 0, action){
  if(action.type == ActionTypes.BEGIN_AJAX_CALL){
    return state + 1;
  } else if(action.type == ActionTypes.AJAX_CALL_SUCCESS
    || action.type == ActionTypes.AJAX_CALL_ERROR
    || actionTypeEndsInSuccess(action.type)){
    return state - 1;
  }
  return state;
}
