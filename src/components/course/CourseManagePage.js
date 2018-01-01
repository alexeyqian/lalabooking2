import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class CourseManagePage extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      saving: false,
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.course.id != nextProps.course.id){
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  formIsValid(){
    let formIsValid = true;
    let errors = {};
    if(this.state.course.title.length < 5){
      errors.title = "Title must be at least 5 characters.";
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  updateCourseState(event){
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event){
    event.preventDefault();
    if(!this.formIsValid())
      return;

    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({saving: false});
        toastr.error(error);
      });
  }

  redirect(){
    this.setState({saving: false});
    toastr.success('Saved successfully.');
    this.props.history.push('/courses');
  }

  render(){
    return (
      <div>
        <h1>Course Manage Page</h1>
        <CourseForm
          allAuthors={this.props.authors}
          errors={this.state.errors}
          course={this.state.course}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          saving={this.state.saving}
          />
      </div>
    );
  }

}

CourseManagePage.propTypes = {
  history: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

CourseManagePage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getCourseById(courses, courseId)
{
  const course = courses.filter(course => course.id == courseId);
  if(course.length) return course[0];
  return null;
}

function mapStateToProps(state, ownProps) {

  const courseId = ownProps.match.params.id;
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  if(courseId && courseId != '0' && state.courses.length > 0)
    course = getCourseById(state.courses, courseId);

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}


function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseManagePage);
