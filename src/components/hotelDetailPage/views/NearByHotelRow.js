import React from 'react';
import PropTypes from 'prop-types';

const NearByHotelRow = ({nearByHotel}) => {
  const h = nearByHotel;

  return(
    <div className="clearfix">
      <div className="float-left">
        <img src={h.defaultPhoto} width="60px" height="60px" />
      </div>
      <div className="float-left ml-1">
        <div><a href={'/hotel/'+ h.id} className="" target="_blank">{h.name}</a></div>
        <div>About <span className="text-info"> 245 </span> meters from this hotel</div>
        <div>{h.currency} {h.price} UP</div>
      </div>
    </div>
  );
};

NearByHotelRow.propTypes = {
  nearByHotel: PropTypes.object.isRequired
};

export default NearByHotelRow;
