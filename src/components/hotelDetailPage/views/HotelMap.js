import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const HotelMap = ({geo}) => {

  return (
    // Important! Always set the container height explicitly
    <div style={{height: '300px', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyCxd3xM8kviP03tfgSmE6iBlr_gGPjVhrs"}}
        defaultCenter={geo.center}
        defaultZoom={geo.zoom}/>
    </div>
  );
};

HotelMap.propTypes = {
  geo: PropTypes.object.isRequired
};

export default HotelMap;
