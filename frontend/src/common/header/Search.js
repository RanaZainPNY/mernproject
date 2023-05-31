import React, { useState } from "react";
import logo from "../../component/assets/images/logo.png";
import { Link } from "react-router-dom";

const Search = ({ CartItem }) => {
  
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="search ">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-2">
              <div className="">
                <img
                  src={logo}
                  alt="Brand Logo"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>
            <div className="col-md-8">              
                <nav
                  className="navbar d-flex justify-content-center py-3"
                  style={{ backgroundColor: "#B28A5E", borderRadius: "60px" }}
                >
                  <div className="navbar-container ">
                    <button
                      className={`navbar-toggle ${isOpen ? "open" : ""}`}
                      onClick={toggleNavbar}
                    >
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </button>
                    <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
                      <li className="navbar-item">
                        <Link to="/home" className="navbar-link">
                          Home
                        </Link>
                      </li>
                      <li className="navbar-item">
                        <Link to="/About" className="navbar-link">
                          About
                        </Link>
                      </li>
                      <li className="navbar-item">
                        <Link to="/Categories" className="navbar-link">
                          Categories
                        </Link>
                      </li>
                      <li className="navbar-item">
                        <Link to="/Shop" className="navbar-link">
                          Shop
                        </Link>
                      </li>
                      <li className="navbar-item">
                        <Link to="/Contact" className="navbar-link">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>                              
            </div>
            <div className="col-md-2">
              <div className="icon f_flex width">
                <i className="fa fa-user icon-circle"></i>
                <div className="cart">
                  <Link to="/cart">
                    <i className="fa fa-shopping-bag icon-circle"></i>
                    <span>0</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
