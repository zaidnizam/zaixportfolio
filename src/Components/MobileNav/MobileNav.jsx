import React from 'react';
import Logo from '../Assets/d86fc481f5d5d0702baed5265915626c.svg';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className="mobile-menu-container">
        <img src={Logo} alt="logo" />
        <ul>
          <li><a className='menu-item'>Home</a></li>
          <li><a className='menu-item'>Skills</a></li>
          <li><a className='menu-item'>Work Experience</a></li>
          <li><a className='menu-item'>Contact Me</a></li>
          <button className='contact-btn' onClick={() => {}}><a href="">Hire Me</a></button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
