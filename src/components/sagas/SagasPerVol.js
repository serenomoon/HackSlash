import React from 'react'
import { Footer } from '../home/Footer'
import { Header } from '../ui/Header'
import { SagasAbout } from './SagasAbout'
import { SagasComicsList } from './SagasComicsList'

export const SagasPerVol = () => {
  return (
    <>
    {/* fondo1.jpg */}
        <Header 
            title={"Volume 1"}
        />

        <SagasAbout />

        <SagasComicsList />

    </>
  )
}
