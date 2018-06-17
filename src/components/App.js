/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import {view as HomePage} from './homePage';
import SignupPage from './account/SignupPage';
import SigninPage from './account/SigninPage';
//import FuelSavingsPage from '../x_not_used/containers/FuelSavingsPage';
import AboutPage from './AboutPage';
//import SearchPage from '../x_not_used/SearchPage';
//import CoursesPage from '../x_not_used/course/CoursesPage';
//import CourseManagePage from '../x_not_used/course/CourseManagePage';
import NotFoundPage from './NotFoundPage';
import Header from './common/Header';
import {connect} from 'react-redux';
import {view as HotelSearchPage} from './hotelSearchPage';
import HotelDetailPage from './hotelDetailPage/views/HotelDetailPage';
import OrderPage from './orderPage/views/OrderPage';
import PaymentPage from './payment/PaymentPage';

class App extends React.Component {

  render() {
    return (
      <div >

        <div className="container bg-light">
          <Header loading={this.props.loading} />
        </div>

        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/signin" component={SigninPage} />
            <Route path="/hotels" component={HotelSearchPage} />
            <Route path="/hotel/:id" component={HotelDetailPage}/>
            <Route path="/order" component={OrderPage}/>
            <Route path="/payment" component={PaymentPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>

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
