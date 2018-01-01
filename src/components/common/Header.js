import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  const activeStyle = { color: 'blue' };
  return (
    <div>
      <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
      {' | '}
      <NavLink exact to="/hotels" activeStyle={activeStyle}>Hotels</NavLink>
      {' | '}
      <NavLink exact to="/search" activeStyle={activeStyle}>Search</NavLink>
      {' | '}
      <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
      {' | '}
      <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
      {loading && <LoadingDots interval={100} dots={20}/>}

      {/*
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>

      </ul>

      </div>
    </nav>*/}

    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;

