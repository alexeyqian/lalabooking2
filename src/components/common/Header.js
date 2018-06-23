import React from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading, user, onLogout}) => {
  {/*const activeStyle = { color: 'blue' };*/}
  const isLoggedIn = user && user.isLoggedIn;

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
      <NavLink to="/" className="navbar-brand">Lala</NavLink>
      {loading && <LoadingDots interval={100} dots={20}/>}
      <button className="navbar-toggler" type="button"
              data-toggle="collapse" data-target="#navbarTopMenu"
              aria-controls="navbarTopMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarTopMenu">

        <ul className="navbar-nav">

          {isLoggedIn &&
            <li className="nav-link">
              <Link to={'/account/' + user.username} ><i className="fas fa-user"></i></Link>
              <a className="btn btn-link" onClick={onLogout}>Logout</a>
            </li>
          }
          {!isLoggedIn &&
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">Login</NavLink>
          </li>
          }
          {!isLoggedIn &&
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">Register</NavLink>
          </li>
          }
        </ul>
      </div>
    </nav>


  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object
};

export default Header;

