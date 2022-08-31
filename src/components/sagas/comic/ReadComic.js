import React from 'react'
import { useParams } from 'react-router-dom'
import { Footer } from '../../home/Footer'
import { Header } from '../../ui/Header'
import { Comic } from './Comic'

export const ReadComic = () => {

  
  const {id} = useParams();

  return (
    <>
        <Header 
            title={`Vol1 // Issue ${ id }`}
        />

        <Comic 
          volume= { id }
        />

        <Footer />
    </>
  )
}
