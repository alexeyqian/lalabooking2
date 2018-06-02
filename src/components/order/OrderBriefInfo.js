import React from 'react';
import PropTypes from 'prop-types';

const OrderBriefInfo = ({orderBrief}) => {
  const b = orderBrief;

  return (
    <div>

      <div>
        <span>From</span>
        <span className="p-x-1">{b.fromDate} (THU)</span>
        <span>To</span>
        <span className="p-x-1">{b.toDate} (FRI)</span>

        <span><a href="#">Edit</a></span>
      </div>

      <div>Room Number Section</div>

      <div>Total: <span className="p-x-1">{b.total}</span>RMB</div>

    </div>
  );

};

OrderBriefInfo.propTypes = {
  orderBrief: PropTypes.object.isRequired
};

export default OrderBriefInfo;
