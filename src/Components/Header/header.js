import React from 'react';
import Nav from './nav';
import './header.css';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <header className='App-header'>
      <div className='nav-heading'>
        <Nav />
      </div>
      <div className='logo-con'>
        <div className='logo'>
          <img src={logo} alt="Logo" className="logo-img" />
          <div className='logo-overlay'>
            Hover to Explore
          </div>
        </div>
        <div className='heading'>
          <h1 className='header-title'>
            Welcome to my Portfolio
          </h1>
          <p className='header-description'>
            Explore my projects, skills, and experience in the world of Front-End Software Development.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
