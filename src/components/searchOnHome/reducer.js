import * as ActionTypes from './actionTypes';

export default function queryReducer(state = {}, action){
  switch (action.type){
    case ActionTypes.UPDATE_QUERY:
      return {...state, ...action.query};

    default:
      return state;
  }
}

// [`${payload.scope}Loading`]: payload.loading,
