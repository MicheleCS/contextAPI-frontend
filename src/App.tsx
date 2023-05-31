import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';


function App() {
  return (
    <div className="App">
      <header>
      <h1>Header do site</h1>
      <nav>
        <a href="/">Home</a>
      </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />} />
      </Routes>
    </div>
  );
}

export default App;
