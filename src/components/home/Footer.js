import React from 'react'

export const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer my-6 mb-0 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Office Address</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Argentina, Buenos Aires</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>0800 Not your business</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="">About Me</a>
                    <a className="btn btn-link" href="">Contact Me</a>
                </div>

                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Photo Gallery</h4>
                    <div className="row g-2">
                        <div className="col-4">
                            <img className="img-fluid bg-light rounded p-1" src="img/cassieprofile.jpg" alt="Image"/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light rounded p-1" src="img/hackslashcrossover1.jpg" alt="Image"/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light rounded p-1" src="img/vladprofile.jpg" alt="Image"/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light rounded p-1" src="img/hackslashcrossover2.jpg" alt="Image"/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light rounded p-1" src="img/hackslashvolume1.jpg" alt="Image"/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light rounded p-1" src="img/hackslashresurrection.jpg" alt="Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
