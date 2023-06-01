import React, { useState } from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="navbar d-flex justify-content-center" style={{ backgroundColor: "#B28A5E" }} >
      <div className="navbar-container ">
        <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <Link to="/home" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/About" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Categories" className="navbar-link">Categories</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Shop" className="navbar-link">Shop</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Contact" className="navbar-link">Contact Us</Link>
          </li>          
          
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;