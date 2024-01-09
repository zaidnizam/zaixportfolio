import React from 'react';
import './Hero.css';
import Logo from '../Assets/Logo.png';
import ReactLogo from '../Assets/React-Logo.png';
import JavascriptLogo from '../Assets/Javascript-Logo.png';
import HtmlLogo from '../Assets/Html-Logo.png';
import CssLogo from '../Assets/Css-Logo.png';


const Hero = () => {
  return (
    <section className='hero-container'>
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          I am a front-end developer, creating stunning websites and crafting engaging user experiences.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className='tech-icon'>
            <img src={ReactLogo} alt="React Image" />
          </div>
          <img className='shake' src={Logo} alt="Background Image" />
        </div>


        <div>
          <div className="tech-icon">
            <img src={HtmlLogo} alt="Html Image" />
          </div>
          <div className="tech-icon">
            <img src={CssLogo} alt="Css Image" />
          </div>
          <div className="tech-icon">
            <img src={JavascriptLogo} alt="Javascript Image" />
          </div>
        </div>




      </div>

    </section>
  );
};

export default Hero;