import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS,
  LOGIN_FAIL, LOGOUT, CHANGE_PASSWORD_SUCCESS, LOAD_PROFILE_SUCCESS} from "./actionTypes";

const user = JSON.parse(localStorage.getItem('user'));
const initUser = user && user.isLoggedIn ? {isLoggedIn: true, ...user} : {};

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
    case CHANGE_PASSWORD_SUCCESS:
      return {};
    case LOAD_PROFILE_SUCCESS:
      return action.user;
    default:
      return state;
  }
}
