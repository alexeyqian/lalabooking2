import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const RoomProductRow = ({product}) => {
  const p = product;
  return (
    <tr>
      <th scope="row">{p.productName}</th>
      <td>{p.supplier}</td>
      <td>{p.breakfast}</td>
      <td>{p.cancellationPolicy}</td>
      <td>{p.price} {p.currency}</td>
      <td><Link to="/order">Book now</Link></td>
    </tr>
  );
};

RoomProductRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default RoomProductRow;
