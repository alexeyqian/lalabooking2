import React from 'react';
import PropTypes from 'prop-types';
import OrderListRow from './OrderListRow';

const OrderList = ({orders}) => {
  return (
    <div>
      {orders.map(order =>
        <OrderListRow key={order.id} order={order}/>
      )}
    </div>
  );
};

OrderList.propTypes = {
  orders: PropTypes.array.isRequired
};

export default OrderList;
