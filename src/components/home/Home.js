import React from 'react';
import { NavBar } from '../ui/NavBar';
import { About } from './About';
import { Carousel } from './Carousel';
import { Crossovers } from './Crossovers';
import { Facts } from './Facts';
import { Footer } from './Footer';
import { Sagas } from './Sagas';
import { Team } from './Team';

export const Home = () => {
  return (
    <div>
      {/* <!-- Spinner Start --> */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" role="status"></div>
    </div> */}
    {/* <!-- Spinner End --> */}



    <NavBar />

    <Carousel />
  
    {/* <Facts /> */}

    <About />

    <Sagas />

    <Crossovers />

    <Team />
   
    <Footer />


    {/* <!-- Back to Top --> */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>


    {/* <!-- JavaScript Libraries --> */}
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    {/* <!-- Template Javascript --> */}
    <script src="js/main.js"></script>
    </div>
  )
}
