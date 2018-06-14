import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import toastr from 'toastr';

import * as paymentActions from '../../actions/paymentActions';

import PaymentSummary from './PaymentSummary';

class PaymentPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      order: this.props.order,
      creditCard: {},

      saving: false,
      errors: {}
    };

    // function bindings ...

  }

  redirect(success){
    this.setState({saving: false});

    if(success){
      toastr.success("paied successfully.");
      this.props.history.push("/paymentSuccessful");
    }
    else{
      toastr.fail("paied fail.");
      this.props.history.push("/paymentFail");
    }
  }

  render(){
    // only for test
    const order = {
      id: 1003,
      number: "33421",
      hotelId: 1002
    };

    return(
      <div>
        <div className="row">

          <div className="col-md-6 paymentSummary">
            <PaymentSummary order={order}/>
          </div>

          <div className="col-md-6 creditCardForm">
            Payment Credit Card

          </div>

        </div>

      </div>
    );
  }

}

PaymentPage.propTypes = {
  order: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state){
  return {
    order: state.order
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(paymentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
