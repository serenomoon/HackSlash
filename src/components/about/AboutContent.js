import React from 'react'

export const AboutContent = ({title,subtitle,text,image}) => {
  return (
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row img-twice position-relative h-100">
                        <div className="col-6">
                            <img className="img-fluid rounded" src={image} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <p className="text-primary text-uppercase mb-2">{`// ${subtitle}`}</p>
                        <h1 className="display-6 mb-4">{title}</h1>
                        <p><i className="fa fa-times text-primary me-2"></i>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
