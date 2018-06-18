import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from './actionTypes';
import AccountApi from '../../api/mockAccountApi';
import {beginAjaxCall} from "../../actions/ajaxStatusActions";

export function registerSuccess(user){
  return {type: REGISTER_SUCCESS, user};
}

export function registerFail(error){
  return {type: REGISTER_FAIL, error};
}

export function loginSuccess(user){
  return {type: LOGIN_SUCCESS, user};
}

export function loginFail(error){
  return {type: LOGIN_FAIL, error};
}

export function logout(){
  return {type: LOGOUT};
}

// begin thunk functions
export function register(user){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return AccountApi.register(user)
      .then(
        user => {
          dispatch(registerSuccess(user));
          // history.push('/login');
        })
      .catch(
        error => {
          dispatch(registerFail(error));
          throw(error);
        });
  };
}


export function login(username, password){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return AccountApi.login(username, password)
      .then(user => {
        dispatch(loginSuccess(user));
        // history.push('/');
      })
      .catch(error => {
        dispatch(loginFail(error));
        throw(error);
      });
  };
}

// end thunk functions
