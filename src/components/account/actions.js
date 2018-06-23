import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from './actionTypes';
import AccountApi from '../../api/mockAccountApi';
import {beginAjaxCall, ajaxCallError} from "../../actions/ajaxStatusActions";
import { push } from 'react-router-redux';
import toastr from 'toastr';

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
          dispatch(push('/login'));
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
        user.isLoggedIn = true;
        dispatch(loginSuccess(user));
        toastr.success('Login Success');
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(push('/'));
      })
      .catch(error => {
        toastr.error(error);
        dispatch(ajaxCallError(error));
        //dispatch(loginFail(error));
        //throw(error);
      });
  };
}

/*
export function logout(username, password){
  return function(dispatch){
    return AccountApi.logout(username)
      .then(user => {
        dispatch(logout(user));
        dispatch(setLoggedIn(false));
        // history.push('/');
      });
  };
}*/

// end thunk functions