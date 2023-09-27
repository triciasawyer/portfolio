import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import './header.css';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <header className='App-header'>
      <div className='nav-heading'>
      <div className="logo-con">
      <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <Nav />
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/triciasawyer-03dev/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            alt="LinkedIn"
            className="linkedin-logo"
            />
          </a>
          <a href="https://github.com/triciasawyer" target="_blank" rel="noopener noreferrer" className="github-icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
