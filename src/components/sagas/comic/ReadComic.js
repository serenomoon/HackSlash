import React from 'react'
import { Footer } from '../../home/Footer'
import { Header } from '../../ui/Header'
import { Comic } from './Comic'

export const ReadComic = () => {
  return (
    <>
        <Header 
            title={"Vol1 // Issue 1"}
        />

        <Comic />

        <Footer />
    </>
  )
}
