import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const HotelListRow = ({hotel}) => {
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
              <NavLink to={'/hotel/'+ hotel.id} className="">{hotel.name}</NavLink>
            </span>
            <span className="card-subtitle ml-2">{hotel.stars} Stars</span>
          </div>
          <div>{hotel.totalReives} Reviews, Score: {hotel.reviewScore}</div>
          <div>
            <span className="glyphicon glyphicon-map-marker" aria-hidden="true"/>

          </div>

          <div className="facility">

            <span className="label label-default">7</span><span>Good</span>
            <i className="fa fa-car" aria-hidden="true"/><span>Parking</span>
            <span className="fa fa-wifi" aria-hidden="true"/><span>Wifi</span>
            <span className="fa fa-car" aria-hidden="true"/><span>Bar</span>

          </div>

          <div className="clearfix">
            <div className="booknow"><button className="btn btn-success">Book Now</button></div>
            <div className="price">${hotel.price}</div>
          </div>

        </div>
      </div>
    </div>
  );

};

HotelListRow.propTypes = {
  hotel: PropTypes.object.isRequired
};

export default HotelListRow;
