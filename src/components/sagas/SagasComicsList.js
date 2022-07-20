import React from 'react'
import { SagasComic } from './SagasComic';

export const SagasComicsList = () => {

    const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]

  return (
    <div className="container-xxl bg-light my-6 py-6 pt-0">
    <div className="container">
 
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
            <p className="text-primary text-uppercase mb-2">// Sagas</p>
            <h1 className="display-6 mb-4">Volume 1</h1>
        </div>
        <div className="row g-4">

        
            {data.map(data => {
                return(
                    <SagasComic 
                        volume= { data }
                        number = {`img/Vol1/${data}.jpg`}
                    />
                )
            })}

        </div>
    </div>
</div>
  )
}
