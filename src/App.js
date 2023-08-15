import React from 'react';
import './App.css';
import Header from './Components/header';
import Content from './Components/Content/content';
import Skills from './Components/Skills/skills';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Skills />
        <Content />
      </main>
    </div>
  );
}

export default App;
