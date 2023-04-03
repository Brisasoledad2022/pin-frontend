import React from 'react';
import logo from "../../assets/logo.png";

const Footer = () => {
    const footerLinks = ["Home", "About", "Products", "Services", "Contact"];

    const clickHandler = id => {
        document.getElementById(id).scrollIntoView({behavior: 'smooth'})
    }

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
                        <h5 className="text-uppercase mx-5">Links</h5>
                        {footerLinks.map(item => ( 
                            <button 
                                name={item} 
                                key={item} 
                                className='mx-5 bg-transparent border-0' 
                                onClick={e => clickHandler(e.target.name)}
                            >
                                {item}
                            </button>)
                        )}
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