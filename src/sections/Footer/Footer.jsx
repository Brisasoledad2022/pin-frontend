import React from "react";
import logo from "../../assets/logo10.png";

const Footer = () => {
  return (
    <footer className="d-flex align-items-center justify-content-between bg-gray px-9 w-100">
      <p className="m-0 text-bold">2023 © All rights reserved.</p>
      <img src={logo} alt="logo" className="col-2" />
    </footer>
  );
};
export default Footer;
