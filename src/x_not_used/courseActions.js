import * as types from '../constants/actionTypes';
import courseApi from '../api/mockCourseApi';
import {ajaxCallError, beginAjaxCall} from "../actions/ajaxStatusActions";

export function createCourse(course){
  return {type: types.CREATE_COURSE, course};
}
export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}
export function createCourseSuccess(course){
  return {type: types.CREATE_COURSE_SUCCESS, course};
}
export function updateCourseSuccess(course){
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

// begin thunk functions

export function loadCourses(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

// end thunk functions