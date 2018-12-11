import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav
    className="navbar navbar-expand navbar-dark bg-dark"
  >
    <div
      className="container"
    >
      <Link
        className="navbar-brand"
        to="/"
      >
      Home
      </Link>

    </div>
  </nav>
);

export default Navbar;
