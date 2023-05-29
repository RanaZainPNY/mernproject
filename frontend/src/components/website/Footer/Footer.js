import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="bg-dark-blue container-fluid">
        <div className="row text-white py-5">
          <div className="col-md-4">
            <div className="container-fluid d-flex justify-content-center align-items-center">
              <div className="row text-white p-5 ">
                <div className="col">
                  <div className="circle d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="1x"
                      color="white"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="circle d-flex justify-content-center align-items-center">
                    <a href="www.facebook.com">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="1x"
                        color="white"
                      />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="circle d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="1x"
                      color="white"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="circle d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faYoutube} size="1x" color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 d-flex justify-content-around  align-items-center ">
            <div className="info ">
              <h5 style={{ fontFamily: "Poppins", fontWeight:"bold"}}>Comapany</h5>
              <span className="fs-s">Customer Service</span><br/>
              <span className="fs-s">Term of Use</span><br/>
              <span className="fs-s">Privacy</span>
              <span className="fs-s">About</span>
              <span className="fs-s">Sustainability</span>
              
            </div>
            <div className="info ">
              <h5 style={{ fontFamily: "Poppins", fontWeight:"bold"}}>Shop</h5>
              <span className="fs-s"> home</span><br/>
              <span className="fs-s"> About</span><br/>
              <span className="fs-s"> Contact Us</span>

              
            </div>
    
            <div className="text-center bg-danger p-3">
              © 2023 Antiques. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
