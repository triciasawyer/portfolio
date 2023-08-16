import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header';
import Content from './Components/Content/content';
import Contact from './Components/Contact/contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Content />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
