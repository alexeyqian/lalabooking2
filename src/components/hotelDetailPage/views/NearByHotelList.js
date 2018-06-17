import React from 'react';
import PropTypes from 'prop-types';
import NearByHotelRow from './NearByHotelRow';

const NearByHotelList = ({hotels}) => {
  return (
    <div>
      {hotels.map(h =>
        <NearByHotelRow key={h.id} nearByHotel={h}/>
        )}
    </div>
  );
};

NearByHotelList.propTypes = {
  hotels: PropTypes.array.isRequired
};

export default NearByHotelList;
