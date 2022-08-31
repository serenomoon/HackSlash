import React from 'react'
import { comicImages, imgJson } from '../../helpers/getImages';
import { SagasComic } from './SagasComic';


export const SagasComicsList = () => {

    const newVol = Object.keys(imgJson.vol1).length
    
    const rows = [];
    for (let i = 1; i < newVol; i++) {
        rows.push(<SagasComic key={i} volume= { i } number={comicImages(`./vol1/vol1-covers/${i}.jpg`)} />);
    }

    return (
        <div className="container-xxl bg-light my-6 py-6 pt-0">
        <div className="container">
    
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <p className="text-primary text-uppercase mb-2">// Sagas</p>
                <h1 className="display-6 mb-4">Volume 1</h1>
            </div>
            <div className="row g-4">
                {rows}
            </div>
        </div>
    </div>
  )
}
