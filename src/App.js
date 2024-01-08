import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skiils/Skills';

const App = () => {

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
      </div>

    </div>
  )
}

export default App;
