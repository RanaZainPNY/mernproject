import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            {/* <span class='fa-solid fa-border-all'></span> */}
            {/* <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4> */}
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to="/">
                  <span className="fs-4">home</span>
                </Link>
              </li>
              <li>
                <Link to="/shop">
                  <span className="fs-4">pages</span>
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <span className="fs-4">user account</span>
                </Link>
              </li>
              <li>
                <Link to="/vendor">
                  <span className="fs-4">vendor account</span>
                </Link>
              </li>
              <li>
                <Link to="/track">
                  <span className="fs-4">track my order</span>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span className="fs-4">contact</span>
                </Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fa fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
