import React from 'react';
import PropTypes from 'prop-types';

const PaymentSummary = ({order}) => {

  return(
    <div>
      Payment Summary
      <div>Order #{order.number}</div>
    </div>
  );

};

PaymentSummary.propTypes = {
  order: PropTypes.object.isRequired
};

export default PaymentSummary;
