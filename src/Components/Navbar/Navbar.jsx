import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
  <nav className='container'>
      <img src={logo} alt="Logo" className="logo" />
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li  className='nav-item'>Home<i className="fa fa-caret-down"></i></li>
            <li className='nav-item'>Page<i className="fa fa-caret-down"></i></li>
            <li className='nav-item'>Tracking</li>
            <li className='nav-item'>Services<i className="fa fa-caret-down"></i></li>
            <li className='nav-item'>Blog<i className="fa fa-caret-down"></i></li>
            <li><button className='btn_2'>Get a quote</button></li>
            <li><button className='btn'>Sign In</button></li>
        </ul>
    </nav>
  )
}

export default Navbar