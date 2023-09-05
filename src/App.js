import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './Components/Content/content';
import About from './Components/About/about';
import Portfolio from './Components/Portfolio/portfolio';
import Contact from './Components/Contact/contact';
import Header from './Components/Header/header'
// import ProjectDetails from './Components/Projects/projectDetails';
import Footer from './Components/Footer/footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
