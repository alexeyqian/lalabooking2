import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import toastr from 'toastr';

import * as actions from '../actions';

import OrderHotelInfo from './OrderHotelInfo';
import OrderRoomTypeInfo from './OrderRoomTypeInfo';
import OrderBriefInfo from './OrderBriefInfo';
import OrderCustomerForm from './OrderCustomerForm';

class OrderPage extends React.Component{
  constructor(props, context){
    super(props, context);

    // test code


    let hotel = {
      name: "Ramada Plaza Peace Shanghai",
      address: "No. 688 Xietu Road, Huangpu District, Shanghai, China",
      defaultPhoto: "http://pavo.elongstatic.com/i/Hotel235_145/00005mvF.jpg"
    };
/*
let orderBrief = {
      fromDate: "2018-06-01",
      toDate: "2018-06-03",
      numberOfRooms: 1,
      currency: "RMB",
      total: 280
    };

    let roomType = {
      name: "Standard",
      bedType: "king",
      sqm: 234.43,
      wifi: "Free WIFI",
      breakfast: "N/A",
      floor: "F6-F18",
      capacity: 2,
      comment: "FreeWiFi/FreeWired"
    };

    let customer = {};
*/
    this.state = {
      order: {
        hotel: hotel,
        //roomType: roomType,
        //orderBrief: orderBrief,
        numberOfRooms: 1,
        //customer: customer,
      },

      saving: false,
      errors: {}
    };

    this.updateCustomerState = this.updateCustomerState.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  formIsValid(){
    let formIsValid = true;
    let errors = {};

    if(this.state.customer.firstName.length < 1){
      errors.firstName = "First name must be at least 1 characters.";
      formIsValid = false;
    }

    if(this.state.customer.lastName.length < 1){
      errors.lastName = "Last name must be at least 1 characters.";
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  updateCustomerState(event){
    const field = event.target.name;
    let order = Object.assign({}, this.state.order);
    order.customer[field] = event.target.value;
    return this.setState({order: order});
  }

  submitOrder(event){
    event.preventDefault();
    if(!this.formIsValid())
      return;

    this.setState({saving: true});
    this.props.actions.saveOrder(this.state.order)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({saving: false});
        toastr.error(error);
      });
  }

  redirect(){
    this.setState({saving: false});
    toastr.success('Saved successfully.');
    this.props.history.push('/payment');
  }

  render(){
    const {hotel} = this.props;

    return(
      <div>
        <div>
          <Link to={hotel.id}>Back to Hotel</Link>
        </div>
        <div className="row">

          <div className="col-md-6">
            <OrderHotelInfo hotel={this.state.order.hotel}/>
            <hr/>
            <OrderRoomTypeInfo roomType={this.state.order.roomType}/>
          </div>

          <div className="col-md-6">
            <OrderBriefInfo orderBrief={this.state.order.orderBrief}/>
            <OrderCustomerForm customer={this.state.order.customer}
                               onChange={this.updateCustomerState}
                               onSubmit={this.submitOrder}
                               errors={this.state.errors}/>
          </div>

        </div>

      </div>

    );
  }
}

OrderPage.propTypes = {
  user: PropTypes.object.isRequired,
  hotel: PropTypes.object.isRequired,
  query: PropTypes.object,
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {

  let hotel = state.hotel;
  if(!hotel || !hotel.id) // try to restore from local storage.
    hotel = JSON.parse(localStorage.getItem('hotel'));

  let user = state.user;
  if(!user || !user.username) // try to restore from local storage.
    user = JSON.parse(localStorage.getItem('user'));

  let query = state.query;
  if(!query) // try to restore from local storage.
    query = JSON.parse(localStorage.getItem('query'));

  return {
    user,
    hotel,
    query
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  } ;
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
