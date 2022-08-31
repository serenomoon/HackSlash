import React from 'react'
import { Link } from 'react-router-dom'

export const SagasComic = ({ volume,number }) => {

    console.log(volume)
    console.log(number)
  return (
    <div className="col-lg-2 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                    <div className="text-center p-4">
                        <h3 className="mb-3">Vol.1-{volume}</h3>
                    </div>
                    <div className="position-relative mt-auto">
                        <img className="img-fluid" src={number} alt=""/>
                        <div className="product-overlay">
                            <Link className="btn btn-lg-square btn-outline-light rounded-circle" to={`/issue/${volume}`}><i className="fa fa-eye text-primary"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
  )
}
