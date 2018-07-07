import React from 'react';
import PropTypes from 'prop-types';
import HotelListRow from './HotelListRow';

const HotelList = ({hotels}) => {
  return (
    <div>
        {hotels.map(hotel =>
          <HotelListRow key={hotel.id} hotel={hotel}/>
        )}
    </div>
  );
};

HotelList.propTypes = {
  hotels: PropTypes.array.isRequired
};

export default HotelList;
