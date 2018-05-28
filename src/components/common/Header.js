import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  {/*const activeStyle = { color: 'blue' };*/}
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
      <NavLink to="/" className="navbar-brand">LalaBooking</NavLink>
      {loading && <LoadingDots interval={100} dots={20}/>}
      <button className="navbar-toggler" type="button"
              data-toggle="collapse" data-target="#navbarTopMenu"
              aria-controls="navbarTopMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarTopMenu">

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/hotels" className="nav-link">Hotels</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link">Sign up</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signin" className="nav-link">Sign in</NavLink>
          </li>
        </ul>
      </div>
    </nav>


  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;

