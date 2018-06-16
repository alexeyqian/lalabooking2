import {UPDATE_QUERY} from "./actionTypes";

export function updateQuery(query){
  return {type: UPDATE_QUERY, query};
}
