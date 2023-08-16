import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="App-header">
      <nav className="Header-nav">
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className='heading'>
      <h1>
        <span style={{ fontSize: '4rem', color: 'pink', marginRight: '10px' }}>
          &#123;&#123;
        </span>{' '}
        Welcome to My Portfolio{' '}
        <span style={{ fontSize: '4rem', color: 'pink', marginLeft: '10px' }}>
          &#125;&#125;
        </span>
      </h1>
      <p>
        Explore my projects, skills, and experience in the world of Front-End Software Development.
      </p>
      </div>
    </header>
  );
}

export default Header;
