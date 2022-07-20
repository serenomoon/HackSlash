import React from 'react';
import { Link } from 'react-router-dom';

export const Crossovers = () => {
  return (
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="text-primary text-uppercase mb-2">// Crossovers</p>
                    <h1 className="display-6 mb-4">What Do You Find Here?</h1>
                    <p className="mb-5">Cassie vs a satanic doll? check, vs a bombshell woman you say? check, demons and half-naked girls? check, with a man with a chainsaw in his hand who travels through dimensions ruining everything? check.</p>
                    <div className="row gy-5 gx-4">
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-book text-white"></i>
                                </div>
                                <h5 className="mb-0">Issues</h5>
                            </div>
                            <span>17 issues, maybe more. What do you want from me?</span>
                            
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-3">
                                <Link className="btn btn-primary rounded-pill py-3 px-5" to="sagas">Read More</Link>
                            </div>
                    
                            
                        </div>

                        {/* <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-birthday-cake text-white"></i>
                                </div>
                                <h5 className="mb-0">Custom Products</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>

                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-cart-plus text-white"></i>
                                </div>
                                <h5 className="mb-0">Online Order</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-truck text-white"></i>
                                </div>
                                <h5 className="mb-0">Home Delivery</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div> */}

                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row img-twice position-relative h-100">
                        <div className="col-6">
                            <img className="img-fluid rounded" src="img/hackslashcrossover1.jpg" alt=""/>
                        </div>
                        <div className="col-6 align-self-end">
                            <img className="img-fluid rounded" src="img/hackslashcrossover2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
