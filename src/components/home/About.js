import React from 'react';
import { Link } from 'react-router-dom';
 
export const About = () => {
  return (
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row img-twice position-relative h-100">
                        <div className="col-6">
                            <img className="img-fluid rounded" src="img/cassieprofile.jpg" alt=""/>
                        </div>
                        <div className="col-6 align-self-end">
                            <img className="img-fluid rounded" src="img/vladprofile.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <p className="text-primary text-uppercase mb-2">// Main Characters</p>
                        <h1 className="display-6 mb-4">Death has come to your little undeadiness, Slasher.</h1>
                        <p><i className="fa fa-times text-primary me-2"></i>Cassandra "Cassie" Hack - A young woman who had to gun down her own mother who, after committing suicide rather than face justice for murdering a group of young boys who were bullying her daughter, returned to life as a slasher called "The Lunch Lady". Cassie now drifts around the United States in an old van, hunting slashers with her partner, Vlad.</p>
                        <p><i className="fa fa-times text-primary me-2"></i>Vlad - The enigmatic partner of Cassie, Vlad is a big, muscular and disfigured man, who wears a gas mask and brandishes two big meat cleavers. Met by Cassie when they were both stalking the "Meatman Killer", Cassie soon befriended him.</p>
                        {/* <div className="row g-2 mb-4">
                            <div className="col-sm-6">
                                <i className="fa fa-times text-primary me-2"></i>Quality Products
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Custom Products
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Online Order
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Home Delivery
                            </div>
                        </div> */}
                        <Link className="btn btn-primary rounded-pill py-3 px-5" to="characters">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
