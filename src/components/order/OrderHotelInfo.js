import React from 'react';
import PropTypes from 'prop-types';

const OrderHotelInfo = ({hotel}) => {
  const h = hotel;
  return (
    <div>

      <div>
        <img src={h.defaultPhoto} />
      </div>
      <div>{h.name}</div>
      <div>{h.address}</div>

    </div>
  );

};

OrderHotelInfo.propTypes = {
  hotel: PropTypes.object.isRequired
};

export default OrderHotelInfo;
