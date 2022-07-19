import React from 'react'

export const Carousel = () => {
  return (
    <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/fondo1.jpg" alt=""/>
                <div className="owl-carousel-inner">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-lg-8">
                                <p className="text-primary text-uppercase fw-bold mb-2">// The Best Horror Comic</p>
                                <h1 className="display-1 text-light mb-4 animated slideInDown">Lets Kill Some Killers</h1>
                                <p className="text-light fs-5 mb-4 pb-3">Learn more about Cassie, Vlad and their missteps.</p>
                                <a href="" className="btn btn-primary rounded-pill py-3 px-5">See More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
