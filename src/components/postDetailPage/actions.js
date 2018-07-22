import {LOAD_POST_SUCCESS} from './actionTypes';
import PostApi from '../../apiClient/mockPostApi';
import {beginAjaxCall} from "../../actions/ajaxStatusActions";

export function loadPostSuccess(post){
  return {type: LOAD_POST_SUCCESS, post};
}

// begin thunk functions

export function loadPostById(id){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return PostApi.getPostById(id)
      .then(post => {
        dispatch(loadPostSuccess(post));
      })
      .catch(error => {
        throw(error);
      });
  };
}

// end thunk functions
