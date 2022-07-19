import React from 'react'

export const Team = () => {
  return (
    <div className="container-xxl py-6">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <p className="text-primary text-uppercase mb-2">// The Maker</p>
                <h1 className="display-6 mb-4">We Aalways Wonder Who Was To Blame</h1>
            </div>
            <div className="row g-4">
                
                

  

                <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.5s"></div>

                <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src="img/timseeley.jpg" alt=""/>
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Tim Seeley</h5>
                                <span>Writer, Artist</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href="https://twitter.com/HackinTimSeeley?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href="https://www.instagram.com/timseeley/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.7s"></div>

            </div>
        </div>
    </div>
  )
}
