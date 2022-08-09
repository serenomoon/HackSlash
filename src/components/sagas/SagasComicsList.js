import React from 'react'
import { importAll } from '../../helpers/hSVol1';
import { SagasComic } from './SagasComic';


export const SagasComicsList = () => {

    const hSVol1 = importAll(require.context('../../assets/vol1/vol1-covers', false, /.(png|jpe?g|svg)$/));

    return (
        <div className="container-xxl bg-light my-6 py-6 pt-0">
        <div className="container">
    
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <p className="text-primary text-uppercase mb-2">// Sagas</p>
                <h1 className="display-6 mb-4">Volume 1</h1>
            </div>
            <div className="row g-4">


                {hSVol1.map((image, index) => {
                    return(
                        <SagasComic 
                            key= { index }
                            volume= { index }
                            number = {image}
                        />
                    )
                })}

            </div>
        </div>
    </div>
  )
}
