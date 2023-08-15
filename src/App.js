import React from 'react';
import './App.css';
import Header from './Components/header';
import Content from './Components/content';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Content />
      </main>
    </div>
  );
}

export default App;
