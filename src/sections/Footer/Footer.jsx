import React from "react";
import logo from "../../assets/logo10.png";

const Footer = () => {
  return (
    <footer className="d-flex align-items-center justify-content-between bg-gray-300 px-9 w-100 mt-">
      <p className="m-0 text-bold text-light">2023 © All rights reserved.</p>
      <img src={logo} alt="logo" className="col-1" />
    </footer>
  );
};
export default Footer;
