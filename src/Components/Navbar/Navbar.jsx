import React, { useState } from 'react';
import Logo from '../Assets/d86fc481f5d5d0702baed5265915626c.svg';
import './Navbar.css';
import MobileNav from '../MobileNav/MobileNav';

const Navbar = () => {
const [openMenu, setOpenMenu] = useState(false)

const toggleMenu = () => {
  setOpenMenu(!openMenu)
};

  return (
    <div>

      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className="nav-content">
          <img className='logo' src={Logo} alt="logo" />

          <ul>
            <li><a className='menu-item'>Home</a></li>
            <li><a className='menu-item'>Skills</a></li>
            <li><a className='menu-item'>Work Experience</a></li>
            <li><a className='menu-item'>Contact Me</a></li>

            <button className='contact-btn' onClick={() => {}}><a href="">Hire Me</a></button>

          </ul>

          <button class='menu-btn' onClick={toggleMenu}>
            <span
            class={"material-symbol-outlined"}
            style={{ fontSize: "1.5rem"}}>
        {openMenu ? "X" : " ☰"}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;