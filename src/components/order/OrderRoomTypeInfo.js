import React from 'react';
import PropTypes from 'prop-types';

const OrderRoomTypeInfo = ({roomType}) => {
  const rt = roomType;

  return (
    <div>

      <div><span>{rt.name}</span></div>
      <div>Bed type: <span className="p-l-1">{rt.bedType}</span></div>
      <div>Area: <span className="p-x-1">{rt.sqm}</span>SQM</div>
      <div>WIFI: <span className="p-l-1">{rt.wifi}</span></div>
      <div>Breakfast: <span className="p-l-1">{rt.breakfast}</span></div>
      <div>Floor: <span className="p-l-1">{rt.floor}</span></div>
      <div>Capacity: <span className="p-l-1">{rt.capacity}</span></div>
      <div>{rt.comment}</div>

      <div>Customer Service: 4009-3333-2222</div>

    </div>
  );

};

OrderRoomTypeInfo.propTypes = {
  roomType: PropTypes.object.isRequired
};

export default OrderRoomTypeInfo;
