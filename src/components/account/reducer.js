import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from "./actionTypes";

let user = JSON.parse(localStorage.getItem('user'));
const initUser = user ? {isLoggedIn: true, user} : {};

export default function account(state = initUser, action){
  switch (action.type){
    case REGISTER_SUCCESS:
      return {};
    case REGISTER_FAIL:
      return {};
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.user
      };
    case LOGIN_FAIL:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
