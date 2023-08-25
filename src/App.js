import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './Components/Content/content';
import About from './Components/About/about';
import Portfolio from './Components/Portfolio/portfolio';
import Contact from './Components/Contact/contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
