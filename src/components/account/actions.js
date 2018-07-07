import * as ActionTypes from './actionTypes';
import AccountApi from '../../apiClient/accountApi';
import {beginAjaxCall, ajaxCallError} from "../../actions/ajaxStatusActions";
import { push } from 'react-router-redux';
import toastr from 'toastr';


export function registerSuccess(user){
  return {type: ActionTypes.REGISTER_SUCCESS, user};
}

export function registerFail(error){
  return {type: ActionTypes.REGISTER_FAIL, error};
}

export function loginSuccess(user){
  return {type: ActionTypes.LOGIN_SUCCESS, user};
}

export function loginFail(error){
  return {type: ActionTypes.LOGIN_FAIL, error};
}

export function logout(){
  return {type: ActionTypes.LOGOUT};
}

export function changePasswordSuccess(){
  return {type: ActionTypes.CHANGE_PASSWORD_SUCCESS};
}

/* example async
*
export function fetchPublishedPosts() {
  return async function (dispatch, getState) {
    dispatch({type: 'LOADING', loading: true});
    const posts = await postService.fetch('published');
    dispatch({type: 'ADD_POSTS', newPosts: posts});
    dispatch({type: 'LOADING', loading: false});
  };
}
* */

// begin thunk functions
export function register(user){
  return function(dispatch){
    dispatch(beginAjaxCall());

    AccountApi.register(user)
      .then(
        response => {
          if(response.data.status !== "success"){
            toastr.error(response.data.message);
            dispatch(ajaxCallError(response.data.message));
            //throw(response.data.message);
          }

          //const newUser = {id: response.data.newId, username: user.username, token: response.data.token};
          //localStorage.setItem('user', JSON.stringify(newUser));
          dispatch(registerSuccess());
          dispatch(push('/login'));
        })
      .catch(
        error => {
          toastr.error(error);
          dispatch(registerFail(error));
        });
  };
}

export function login(username, password){
  return function(dispatch){
    dispatch(beginAjaxCall());

    return AccountApi.login(username, password)
      .then(response => {
        if(response.data.status !== "success"){
          toastr.error(response.data.message);
          dispatch(ajaxCallError(response.data.message));
          //throw(response.data.message);
        }

        let user = response.data.user;
        user.isLoggedIn = true;
        user.token = response.data.token;
        localStorage.setItem('user', JSON.stringify(user));

        dispatch(loginSuccess(user));
        dispatch(push('/'));
      })
      .catch(error => {
        toastr.error(error);
        dispatch(ajaxCallError(error));
      });
  };
}

export function changePassword(password, newPassword){
  return function(dispatch){
    dispatch(beginAjaxCall());

    return AccountApi.changePassword(password, newPassword)
      .then(response => {

        response.data.status === 'success' ? toastr.success('Change password success')
          : toastr.error('Change password failed');
      })
      .catch(error => {
        toastr.error(error);
        dispatch(ajaxCallError(error));
      });
  };
}

export function loadProfile(){
  return function(dispatch){
    dispatch(beginAjaxCall());

    return AccountApi.loadProfile()
      .then(response => {
        if(response.data.status !== 'success')
        {
          toastr.error(response.data.message);
          dispatch(ajaxCallError(response.data.message));
        }
        return response.data.user;
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
      .then(response => {
        const flag = response.data.status === 'success';
          if(flag){
            toastr.success('Update profile success');
            // update local storage
            let toBeUpdated = JSON.parse(localStorage.getItem('user'));
            toBeUpdated.firstname = user.firstname;
            toBeUpdated.lastname = user.lastname;
            toBeUpdated.mobile = user.mobile;
            localStorage.setItem('user', JSON.stringify(toBeUpdated));
          } else
            toastr.error(response.data.message);
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
