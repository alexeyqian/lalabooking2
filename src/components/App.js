/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomePage from './home/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import SearchPage from './SearchPage';
import CoursesPage from './course/CoursesPage';
import CourseManagePage from './course/CourseManagePage';
import NotFoundPage from './NotFoundPage';
import Header from './common/Header';
import {connect} from 'react-redux';
import HotelsPage from "./hotel/HotelsPage";
import HotelDetailPage from './hotel/HotelDetailPage';

class App extends React.Component {

  render() {
    return (
      <div>
        <div>
          <Header loading={this.props.loading} />
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hotels" component={HotelsPage} />
          <Route path="/hotel/:id" component={HotelDetailPage}/>
          <Route path="/search" component={SearchPage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/course/:id" component={CourseManagePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  loading: PropTypes.bool.isRequired
};

function mapStateToPros(state){
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default withRouter(connect(mapStateToPros)(App));
