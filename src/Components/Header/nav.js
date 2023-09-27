import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="header-nav">
      <ul className="nav-list">
        <li className="nav-item">
        <NavLink
            exact
            className={`nav-link ${location.pathname === '/about' ? 'active-link' : ''}`}
            to="/about"
          >
            about
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
            exact
            className={`nav-link ${location.pathname === '/portfolio' ? 'active-link' : ''}`}
            to="/portfolio"
          >
            portfolio
          </NavLink>

        </li>
        <li className="nav-item">
        <NavLink
            exact
            className={`nav-link ${location.pathname === '/contact' ? 'active-link' : ''}`}
            to="/contact"
          >
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
