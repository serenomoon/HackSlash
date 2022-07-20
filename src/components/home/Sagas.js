import React from 'react'
import { Link } from 'react-router-dom';


export const Sagas = () => {
  return (
    <div className="container-xxl bg-light my-6 py-6 pt-0">
    <div className="container">
        <div className="bg-primary text-light rounded-bottom p-5 my-6 mt-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                    <h1 className="display-4 text-light mb-0">The Best Horror Comic</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <div className="d-inline-flex align-items-center text-start">
                        <i className="fa fa-info fa-4x flex-shrink-0"></i>
                        <div className="ms-4">
                            <p className="fs-5 fw-bold mb-0">See in Image's web</p>
                            <a className="fs-1 fw-bold mb-0" href="https://imagecomics.com/comics/series/hack-slash" style={{color:"white",cursor:"pointer"}}>Click here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
            <p className="text-primary text-uppercase mb-2">// Sagas</p>
            <h1 className="display-6 mb-4">Explore The Hack Slash Sagas</h1>
        </div>
        <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                    <div className="text-center p-4">
                        <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">250</div>
                        <h3 className="mb-3">Vol. 1/13</h3>
                        <span>Begin the adventures of Cassie and her new partner Vlad.</span>
                    </div>
                    <div className="position-relative mt-auto">
                        <img className="img-fluid" src="img/hackslashvolume1.jpg" alt=""/>
                        <div className="product-overlay">
                            <Link className="btn btn-lg-square btn-outline-light rounded-circle" to="sagas"><i className="fa fa-eye text-primary"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                    <div className="text-center p-4">
                        <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">5</div>
                        <h3 className="mb-3">Son of Samhain</h3>
                        <span>Continuation of Cassie's adventures after Samhain.</span>
                    </div>
                    <div className="position-relative mt-auto">
                        <img className="img-fluid" src="img/hackslashsonofsamhain.jpg" alt=""/>
                        <div className="product-overlay">
                            <Link className="btn btn-lg-square btn-outline-light rounded-circle" to="sagas"><i className="fa fa-eye text-primary"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                    <div className="text-center p-4">
                        <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">12</div>
                        <h4 className="mb-3">Resurrection</h4>
                        <span>Forget about the previous saga and continue from the first.</span>
                    </div>
                    <div className="position-relative mt-auto">
                        <img className="img-fluid" src="img/hackslashresurrection.jpg" alt=""/>
                        <div className="product-overlay">
                            <Link className="btn btn-lg-square btn-outline-light rounded-circle" to="sagas"><i className="fa fa-eye text-primary"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
