import React from "react";
import logo from "../../assets/logo7.png";

const Footer = () => {
  return (
    <footer className="bg-gray text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <img className="logo" alt="logo" src={logo} />
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            {/*  <h5 className="text-uppercase">All rights reserved to The Bloom Bar.</h5>*/}
            <p>
              
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
           
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#Home" className="neon">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="neon">
                  About
                </a>
              </li>
              <li>
                <a href="#Products" className="neon">
                  Products
                </a>
              </li>
              <li>
                <a href="#Services" className="neon">
                  Services
                </a>
              </li>
              <li>
                <a href="#Contact" className="neon">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} All rights reserved to "The Bloom bar"
      </div>
    </footer>
  );
};
export default Footer;
