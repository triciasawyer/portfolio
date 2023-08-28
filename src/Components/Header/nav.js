import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav className="header-nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
