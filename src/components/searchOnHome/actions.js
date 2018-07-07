import * as ActionTypes from "./actionTypes";

export function updateQuery(query){
  return {type: ActionTypes.UPDATE_QUERY, query};
}
