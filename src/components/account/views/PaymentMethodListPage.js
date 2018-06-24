import React from 'react';
import {connect} from 'react-redux';
import UserSideMenu from '../../../components/common/UserSideMenu';

class PaymentMethodListPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {


    return (

      <div className="row">
        <div className="col-md-3">
          <UserSideMenu/>
        </div>

        <div className="col-md-9">
          Payment method list
        </div>
      </div>


    );

  }

}

export default connect()(PaymentMethodListPage);
