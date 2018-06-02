import React from 'react';
import PropTypes from 'prop-types';
import RoomProductRow from './RoomProductRow';

const RoomTypeListRow = ({roomType}) => {
  const t = roomType;
  return (

    <div id={'roomType_'+roomType.id} className="card roomType-item p-1 my-1">
      <div className="">

        <div className="clearfix hotel-type-header">
          <div className="float-left">
            <img className="hotel-type-image" src={roomType.defaultPhoto} />
          </div>
          <div className="float-left">
            <span className="p-2">{t.sqm}</span><span className="p-2">|</span>
            <span className="p-2">{t.bedType}</span><span className="p-2">|</span>
            <span className="p-2">{t.capacity}</span><span className="p-2">|</span>
            <span className="p-2">{t.floor}</span>
          </div>
          <div className="float-right">
            <span className="p-2">{t.minPrice}</span><span className="p-2">{t.currency}</span>
          </div>
        </div>

        <div className="">
          <table className="table">
            <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Supplier</th>
              <th scope="col">Breakfast</th>
              <th scope="col">Cancellation</th>
              <th scope="col">price</th>
              <th scope="col"/>
            </tr>
            </thead>
            <tbody>
            {t.products.map(p =>
              <RoomProductRow key={p.productId} product={p}/>
            )}
            </tbody>
          </table>
        </div>

        <div>
          {t.photos.map((p, index) => {
              <div key={index} className="float-left mr-1">
                <img src={p} width="120px" height="120px"/>
              </div>
            }
          )}
        </div>

      </div>
    </div>
  );

};

RoomTypeListRow.propTypes = {
  roomType: PropTypes.object.isRequired
};

export default RoomTypeListRow;
