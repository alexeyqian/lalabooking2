import * as ActionTypes from './actionTypes';

export default function homePageReducer(state = {}, action){
  switch (action.type){
    case ActionTypes.LOAD_HOT_CITIES:

      return {};

    default:
      return state;
  }
}

// [`${payload.scope}Loading`]: payload.loading,
