import React from 'react';
import PropTypes from 'prop-types';
import RoomTypeListRow from './RoomTypeListRow';

const RoomTypeList = ({roomTypes}) => {
  return (
    <div>
      {roomTypes.map(roomType =>
        <RoomTypeListRow key={roomType.roomTypeId} roomType={roomType}/>
      )}
    </div>
  );

};

RoomTypeList.propTypes = {
  roomTypes: PropTypes.array.isRequired
};

export default RoomTypeList;
