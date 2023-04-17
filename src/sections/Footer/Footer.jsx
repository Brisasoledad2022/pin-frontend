import React from "react";
import logo from "../../assets/logo10.png";
import useWindowInfo from "../../hooks/useWindowInfo";

const Footer = () => {
  const { mobileDesign } = useWindowInfo();

  return (
    <footer className={`d-flex ${
      mobileDesign ? "px-4" : "px-9"
    } align-items-center justify-content-between bg-gray-300 w-100`}>
      <p className="m-0 text-bold text-light">2023 © All rights reserved.</p>
      <img src={logo} alt="logo" className="col-1" />
    </footer>
  );
};
export default Footer;
