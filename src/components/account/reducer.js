import * as ActionTypes from "./actionTypes";

const user = JSON.parse(localStorage.getItem('user'));
const initUser = user && user.isLoggedIn ? {isLoggedIn: true, ...user} : {};

export default function account(state = initUser, action){
  switch (action.type){
    case ActionTypes.REGISTER_SUCCESS:
      return {};
    case ActionTypes.REGISTER_FAIL:
      return {};
    case ActionTypes.LOGIN_SUCCESS:
      return action.user;
    case ActionTypes.LOGIN_FAIL:
      return {};
    case ActionTypes.LOGOUT:
      return {};
    case ActionTypes.CHANGE_PASSWORD_SUCCESS:
      return {};
    case ActionTypes.PROFILE_LOAD_SUCCESS:
      return action.user;
    default:
      return state;
  }
}
