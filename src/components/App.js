/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import {view as HomePage} from './homePage';
import {LoginPage, RegisterPage, ChangePasswordPage, ProfilePage, PaymentMethodListPage} from './account';
import AboutPage from './AboutPage';
import PrivateRoute from './common/PrivateRoute';
import {view as MyOrderPage} from './myOrderPage';
import NotFoundPage from './NotFoundPage';
import Header from './common/Header';
import {connect} from 'react-redux';
import {view as HotelSearchPage} from './hotelSearchPage';
import HotelDetailPage from './hotelDetailPage/views/HotelDetailPage';
import OrderPage from './orderPage/views/OrderPage';
import PaymentPage from './payment/PaymentPage';
import {view as PostListPage} from './postListPage';
import {view as PostDetailPage} from './postDetailPage';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    localStorage.removeItem('user');
    this.props.history.push('/');
  }

  render() {
    let user = {};
    const strUser = localStorage.getItem('user');
    if(strUser)
      user = JSON.parse(strUser);
    return (
      <div >

        <div className="bg-light">
          <Header loading={this.props.loading} user={user} onLogout={this.handleLogout} />
        </div>

        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/posts" component={PostListPage} />
            <Route exact path="/posts/:slug" component={PostDetailPage} />
            <Route path="/hotels" component={HotelSearchPage} />
            <Route path="/hotel/:id" component={HotelDetailPage}/>
            <Route path="/about" component={AboutPage} />

            <PrivateRoute exact path="/changePassword" component={ChangePasswordPage} />
            <PrivateRoute exact path="/profile" component={ProfilePage} />
            <PrivateRoute exact path="/myorders" component={MyOrderPage} />
            <PrivateRoute exact path="/paymentMethods" component={PaymentMethodListPage} />
            <PrivateRoute exact path="/order" component={OrderPage}/>
            <PrivateRoute exact path="/payment" component={PaymentPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>

      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToPros(state){
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default withRouter(connect(mapStateToPros)(App));
