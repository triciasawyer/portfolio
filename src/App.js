import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './Components/Content/content';
import Contact from './Components/Contact/contact';
import About from './Components/About/about';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
