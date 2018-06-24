import React from 'react';
//import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const UserSideMenu = () => {

  return (

    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <NavLink to="/myorders" className="nav-link">My Orders</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/paymentMethods" className="nav-link">Payment Methods</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/changePassword" className="nav-link">Change Password</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/logout" className="nav-link">Logout</NavLink>
      </li>
    </ul>

  );
};

export default UserSideMenu;

