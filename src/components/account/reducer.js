import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from "./actionTypes";

const user = JSON.parse(localStorage.getItem('user'));
const initUser = user && user.isLoggedIn ? {isLoggedIn: true, ...user} : {};

/*
export function loginStatus(state = false, action){
  switch (action.type){
    case SET_LOGIN_STATUS:
      return action.flag;
    default:
      return state;
  }
}*/

export default function account(state = initUser, action){
  switch (action.type){
    case REGISTER_SUCCESS:
      return {};
    case REGISTER_FAIL:
      return {};
    case LOGIN_SUCCESS:
      return action.user;
    case LOGIN_FAIL:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
