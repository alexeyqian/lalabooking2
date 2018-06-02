import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import toastr from 'toastr';

import * as orderActions from '../../actions/orderActions';

import OrderHotelInfo from './OrderHotelInfo';
import OrderRoomTypeInfo from './OrderRoomTypeInfo';
import OrderBriefInfo from './OrderBriefInfo';
import OrderCustomerForm from './OrderCustomerForm';

class OrderPage extends React.Component{
  constructor(props, context){
    super(props, context);

    // test code
    let orderBrief = {
      fromDate: "2018-06-01",
      toDate: "2018-06-03",
      numberOfRooms: 1,
      currency: "RMB",
      total: 280
    };

    let hotel = {
      name: "Ramada Plaza Peace Shanghai",
      address: "No. 688 Xietu Road, Huangpu District, Shanghai, China",
      defaultPhoto: "http://pavo.elongstatic.com/i/Hotel235_145/00005mvF.jpg"
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

    this.state = {
      order: {
        hotel: hotel,
        roomType: roomType,
        orderBrief: orderBrief,
        numberOfRooms: 1,
        customer: customer,
      },

      saving: false,
      errors: {}
    };

    this.updateCustomerState = this.updateCustomerState.bind(this);
    this.saveOrder = this.saveOrder.bind(this);
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

  saveOrder(event){
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
    //const {hotel, roomType, orderBrief, customer} = this.state;

    return(
      <div>

        <div className="row">

          <div className="col-md-4">
            <OrderHotelInfo hotel={this.state.order.hotel}/>
            <OrderRoomTypeInfo roomType={this.state.order.roomType}/>
          </div>

          <div className="col-md-4">
            <OrderBriefInfo orderBrief={this.state.order.orderBrief}/>
            <OrderCustomerForm customer={this.state.order.customer}
                               onChange={this.updateCustomerState}
                               errors={this.state.errors}/>
          </div>

        </div>

      </div>

    );
  }
}

OrderPage.propTypes = {
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  let user = {name: "Alexey", isAuthorized: true};
  if(state.user)
    user = state.user;

  return {
    user: user
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(orderActions, dispatch)
  } ;
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
