import React from 'react'
import Alternativas1 from './Alternativas1'
import Alternativas2 from './Alternativas2'
import Alternativas3 from './Alternativas3'
import Respostas from './Respostas'
import Finalizar from './Finalizar'

const Quiz = () => {
  return (
    <div>
        <h1>Quiz de Front-End</h1>
        <h2>#1 - O que é Front-End?</h2>
        <Alternativas1/>
        <h2>#2 - O que é React JS?</h2>
        <Alternativas2/>
        <h2>#3 - Quais sao as principais tecnologis do mundo Front-end?</h2>
        <Alternativas3/>
        <Respostas/>
        <Finalizar/>
    </div>
  )
}

export default Quiz