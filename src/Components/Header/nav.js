import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav className="Header-nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
