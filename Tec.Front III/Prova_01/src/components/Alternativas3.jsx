import React from 'react'
import { useState } from 'react'
import Respostas from './Respostas'

const Alternativas3 = () => {
    const [alternativa] = useState(["Java, GoLang e Python.", "AWS, Google Cloud e Azure.", "Kotlin, HTML e CSS.", "HTML, CSS e JavaScript."])

  return (
    <div>
        <ul>
            {alternativa.map((item,i) =>(
                <li type = 'a' key = {i}>{item} <button onClick={Respostas.adicionaResposta}>Escolher</button></li>
            ))}
        </ul>
    </div>
  )
}

export default Alternativas3