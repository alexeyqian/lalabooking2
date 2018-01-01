import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {bindActionCreators} from 'redux';
//import * as courseActions from '../actions/courseActions';
import CourseList from './CourseList';
//import {browserHistory} from 'react-router-dom';

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.redirectToCreateCoursePage = this.redirectToCreateCoursePage.bind(this);
  }

  redirectToCreateCoursePage(){
    this.props.history.push('/course/0');
  }

  render(){
    const {courses} = this.props;
    return(
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Create Course"
          className="btn btn-primary"
          onClick={this.redirectToCreateCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );

  }

}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
  //actions: PropTypes.object.isRequired
};

function mapStateToProps(state){
  return {
    courses: state.courses
  };
}

// function mapDispatchToProps(dispatch){
//   return {
//     actions: bindActionCreators(courseActions, dispatch)
//   } ;
// }

export default connect(mapStateToProps)(CoursesPage);
