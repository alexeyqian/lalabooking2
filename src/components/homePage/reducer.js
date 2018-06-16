import {UPDATE_QUERY} from './actionTypes';

export default function loadHomePageReducer(state = {}, action){
  switch (action.type){
    case UPDATE_QUERY:
      return {...state, ...action.query};

    default:
      return state;
  }
}
