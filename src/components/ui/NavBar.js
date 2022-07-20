import React from 'react';
import { Link } from 'react-router-dom';
 

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <Link to="index.html" className="navbar-brand ms-4 ms-lg-0">
            <h1 className="text-primary m-0">Hack <img src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/D62121/external-knife-kitchen-utensils-solidglyph-m-oki-orlando.png"/> Slash</h1>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="about" className="nav-item nav-link">About</Link>
                <Link to="characters" className="nav-item nav-link">Characters</Link>
                <div className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sagas</Link>
                    <div className="dropdown-menu m-0">
                        <Link to="sagas" className="dropdown-item">Volume 1</Link>
                        <Link to="sagas" className="dropdown-item">Son of Samhain</Link>
                        <Link to="sagas" className="dropdown-item">Resurrection</Link>
                    </div>
                </div>
                <Link to="sagas" className="nav-item nav-link">Crossovers</Link>
                <Link to="contact" className="nav-item nav-link">Contact</Link>
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
