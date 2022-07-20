import React from 'react';
import { About } from './About';
import { Carousel } from './Carousel';
import { Crossovers } from './Crossovers';
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


    <Carousel />
  
    {/* <Facts /> */}

    <About />

    <Sagas />

    <Crossovers />

    <Team />
    
    </div>
  )
}
