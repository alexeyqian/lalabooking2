import * as ActionTypes from "./actionTypes";

export function loadHotCities(cities){
  return {type: ActionTypes.LOAD_HOT_CITIES, cities};
}
