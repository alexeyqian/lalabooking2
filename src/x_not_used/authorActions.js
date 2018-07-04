import AuthorApi from '../apiClient/mockAuthorApi';
import * as types from '../constants/actionTypes';
import {beginAjaxCall} from "../actions/ajaxStatusActions";

export function loadAuthorsSuccess(authors){
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
      }).catch(error => {throw(error);});
  };
}
