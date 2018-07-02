import React from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading, user, onLogout}) => {
  {/*const activeStyle = { color: 'blue' };*/
  }
  const isLoggedIn = user && user.isLoggedIn;

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
      <NavLink to="/" className="navbar-brand">Lala Booking</NavLink>
      {loading && <LoadingDots interval={100} dots={20}/>}
      <button className="navbar-toggler" type="button"
              data-toggle="collapse" data-target="#navbarTopMenu"
              aria-controls="navbarTopMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarTopMenu">

        <ul className="navbar-nav">

          {isLoggedIn &&
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
               aria-expanded="false">
              <i className="fas fa-user"/><span className="ml-1">Account</span>
            </a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/myOrders">My Orders</Link>
              <Link className="dropdown-item" to="/paymentMethods">Payment Methods</Link>
              <div className="dropdown-divider"/>
              <Link className="dropdown-item" to="/profile">Profile</Link>
              <Link className="dropdown-item" to={'/changePassword'}>Change password</Link>
              <div className="dropdown-divider"/>
              <a className="dropdown-item" onClick={onLogout}>Logout</a>
            </div>
          </li>
          }
          {!isLoggedIn &&
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          }
        </ul>
      </div>
    </nav>


  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired
};

export default Header;

