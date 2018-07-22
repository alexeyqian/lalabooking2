import * as types from './actionTypes';

export default function postReducer(state={}, action){
  switch(action.type){
    case types.LOAD_POST_SUCCESS:
      return {...state, ...action.post};

    default:
      return state;
  }

}
