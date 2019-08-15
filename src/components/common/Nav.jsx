import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/styles/landing.scss';

const NavBar = (props) => {
  const { authUser } = props;
  return (
    <div className="navbar">
      <input type="checkbox" id="navbar-check"/>
      <div className="navbar__header">
        <div className="navbar__header__brand">
          DigiLand
        </div>
      </div>
      <div className="navbar__btn">
          <label htmlFor="navbar-check">
              <span></span>
              <span></span>
              <span></span>
          </label>
      </div>
      { authUser ? (
          <div className="navbar__links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="#">Register Land</NavLink>
              <NavLink to="/login">Logout</NavLink>
          </div>
      ) : (
          <div className="navbar__links">
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
          </div>
      ) }

    </div>
  )
}

export default NavBar;
