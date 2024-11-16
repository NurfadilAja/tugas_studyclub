import React from 'react';
import './index.css';  
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
