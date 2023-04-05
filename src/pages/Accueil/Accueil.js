import React from 'react'
import AccueilM from './AccueilM'
import AccueilNosActivités from './AccueilNosActivités'
import Carrouse from './Carrousel'

export default function Accueil() {
  return (
    <div>
      <Carrouse />
      <AccueilM />
      <AccueilNosActivités/>
    </div>
  )
}
