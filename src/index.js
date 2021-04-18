import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Photography from './components/Photography';
import Skills from './components/Skills';
import Footer from './components/Footer'




ReactDOM.render(
  <React.StrictMode>
    <App />
    <Hero/>
    <Skills/>
    <Projects/>
    <Photography/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);