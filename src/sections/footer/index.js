import React from 'react';
import logo from "../../assets/logo.png";

const Footer = () => {
    return(
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <img className="logo" alt="logo" src={logo} />
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                            voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#Home" className="text-dark">Home</a>
                            </li>
                            <li>
                                <a href="#About" className="text-dark">About</a>
                            </li>
                            <li>
                                <a href="#Products" className="text-dark">Products</a>
                            </li>
                            <li>
                                <a href="#Services" className="text-dark">Services</a>
                            </li>
                            <li>
                                <a href="#Contact" className="text-dark">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © {new Date().getFullYear()} BLOOM
            </div>
        </footer>
    )
}

export default Footer;