import React from 'react'

export const AboutFacts = () => {
  return (
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-calendar fa-4x text-primary mb-4"></i>
                        <p className="mb-2">First Number</p>
                        <h1 className="display-6 mb-0" data-toggle="counter-up">10/21/01</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-building fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Editorial</p>
                        <h1 className="display-6 mb-0" data-toggle="counter-up">Image Comics</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-book fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Total Comics</p>
                        <h1 className="display-6 mb-0" data-toggle="counter-up">235</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-user fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Creator</p>
                        <h1 className="display-6 mb-0" data-toggle="counter-up">Tim Seeley</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
