import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <nav
    className="navbar navbar-expand navbar-dark bg-dark"
  >
    <div
      className="container"
    >
      <Link
        className="navbar-brand"
        onClick={(e) => props.setCurrentState('')}
        to="/"
      >
      Home
      </Link>

    </div>
  </nav>
);

export default Navbar;
