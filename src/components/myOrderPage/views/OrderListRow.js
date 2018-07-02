import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const OrderListRow = ({order}) => {
  const hotel = order.hotel;
  return (

    <div id={'hotel_'+hotel.id} className="card hotel-item p-1 my-1">
      <div className="row">

        <div className="col-md-3">
          <a href={'/hotel/'+ hotel.id}>
            <img className="hotelImage" src={hotel.defaultPhoto} />
          </a>
        </div>

        <div className="col-md-9">

          <div>
            <span className="card-title">
              <Link to={'/hotel/'+ hotel.id} className="">{hotel.name}</Link>
            </span>
            <span className="card-subtitle ml-2">{hotel.stars} Stars</span>
          </div>

          <div>
            <span>Check-in: {order.checkin}</span>
            <span>Check-out: {order.checkout}</span>
          </div>

          <div className="clearfix">
            <div className="booknow">STATUS</div>
            <div className="price">${order.total}</div>
          </div>

        </div>

      </div>
    </div>
  );

};

OrderListRow.propTypes = {
  order: PropTypes.object.isRequired
};

export default OrderListRow;
