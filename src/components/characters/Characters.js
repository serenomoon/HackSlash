import React from 'react'
import { Footer } from '../home/Footer'
import { Header } from '../ui/Header'
import { CharacterOne } from './CharacterOne'

export const Characters = () => {
  return (
    <>
        <Header 
            title={"Characters"}
        />

        <CharacterOne />

        <CharacterOne />

        <CharacterOne />

    </>
  )
}
