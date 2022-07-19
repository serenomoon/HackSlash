import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//   import { facebook } from '@fortawesome/free-thin-svg-icons';


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
        {/* D62121 */}
            <h1 className="text-primary m-0">Hack <img src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/D62121/external-knife-kitchen-utensils-solidglyph-m-oki-orlando.png"/> Slash</h1>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto p-4 p-lg-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Characters</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sagas</a>
                    <div className="dropdown-menu m-0">
                        <a href="team.html" className="dropdown-item">Volume 1</a>
                        <a href="testimonial.html" className="dropdown-item">Son of Samhain</a>
                        <a href="404.html" className="dropdown-item">Resurrection</a>
                    </div>
                </div>
                <a href="product.html" className="nav-item nav-link">Crossovers</a>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <div className=" d-none d-lg-flex">
                <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                    <i className="fa fa-envelope text-primary"></i>
                </div>
                <div className="ps-3">
                    <small className="text-primary mb-0">Email Me</small>
                    <p className="text-light fs-5 mb-0">cassienvlad@gmail.com</p>
                </div>
            </div>
        </div>
    </nav>
  )
}
