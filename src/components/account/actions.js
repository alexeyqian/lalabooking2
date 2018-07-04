import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CHANGE_PASSWORD_SUCCESS} from './actionTypes';
import AccountApi from '../../apiClient/accountApi';
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

export function changePasswordSuccess(){
  return {type: CHANGE_PASSWORD_SUCCESS};
}

// begin thunk functions
export function register(user){
  return function(dispatch){
    dispatch(beginAjaxCall());

    AccountApi.register(user)
      .then(
        response => {
          const newUser = {id: response.data.newId, username: user.username, token: response.data.token};
          localStorage.setItem('user', JSON.stringify(newUser));
          dispatch(registerSuccess(newUser));
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
        //toastr.success('Login Success');
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

export function changePassword(username, password, newPassword){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return AccountApi.changePassword(username, password, newPassword)
      .then(flag => {
        flag ? toastr.success('Change password success') : toastr.error('Change password failed');
      })
      .catch(error => {
        toastr.error(error);
        dispatch(ajaxCallError(error));
      });
  };
}

export function loadProfile(username){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return AccountApi.loadProfile(username)
      .then(user => {
        return user;
      })
      .catch(error => {
        toastr.error(error);
        dispatch(ajaxCallError(error));
      });
  };
}

export function updateProfile(user){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return AccountApi.updateProfile(user)
      .then(flag => {
        flag ? toastr.success('Update profile success') : toastr.error('Update profile failed');
      })
      .catch(error => {
        toastr.error(error);
        dispatch(ajaxCallError(error));
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
