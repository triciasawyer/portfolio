import React from 'react';
import Nav from './nav';
import './header.css';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <header className='App-header'>
        <Nav />
      <div className='logo-con'>
        <img src={logo} alt="Logo" className="logo" />
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
