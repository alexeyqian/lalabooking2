import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import OrderList from './OrderList';
import UserSideMenu from '../../../components/common/UserSideMenu';

class OrderListPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      orders: []
    };

    this.handelFilterChange = this.handelFilterChange.bind(this);
    this.handelSelectOrder = this.handelSelectOrder.bind(this);
  }

  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    this.props.actions.loadMyOrders(user.username).then(orders => {
      if(orders && orders.length > 0)
        this.setState({orders: orders});
      else
        this.setState({orders: []});
    });
  }

  handelFilterChange(){

  }

  handelSelectOrder(id){
    this.props.history.push(`myorder/${id}`);
  }

  render(){
    const {orders} = this.state;

    let orderList = <OrderList orders={orders}/>;

    if(!orders || orders.length <= 0)
      orderList = <div>No orders found</div>;

    return(
      <div className="row">
        <div className="col-md-3">
            <UserSideMenu/>
        </div>

        <div className="col-md-9">
            {orderList}
        </div>
      </div>
    );

  }

}

OrderListPage.propTypes = {
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  } ;
}

export default connect(null, mapDispatchToProps)(OrderListPage);

