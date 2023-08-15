import React from 'react';

const Header = () => {
    // let scrollToPortfolio = () => {
    //     let portfolioSection = document.getElementById('portfolio');
    //     if (portfolioSection) {
    //       portfolioSection.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   };

  return (
    <header className="App-header">
<h1><span style={{ fontSize: '4rem', color: 'pink', marginRight: '10px' }}>&#123;&#123;</span> Welcome to My Portfolio <span style={{ fontSize: '4rem', color: 'pink', marginLeft: '10px' }}>&#125;&#125;</span></h1>      <p>Explore my projects, skills, and experience in the world of Front-End Software Development.</p>
      {/* <button onClick={scrollToPortfolio}>Check it out</button> */}
    </header>
  );
}

export default Header;
