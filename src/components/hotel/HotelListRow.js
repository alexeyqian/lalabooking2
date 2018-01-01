import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const HotelListRow = ({hotel}) => {
  return (
    <div>
      <span><a href={hotel.id} target="_blank">PHOTO</a></span>
      <span><Link to={'/hotel/' + hotel.id}>{hotel.name}</Link></span>
      <span>{hotel.category}</span>
    </div>
  );

};

HotelListRow.propTypes = {
  hotel: PropTypes.object.isRequired
};

export default HotelListRow;
