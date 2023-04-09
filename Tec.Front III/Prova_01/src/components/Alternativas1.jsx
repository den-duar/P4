import React from 'react'
import { useState } from 'react'
import Respostas from './Respostas'

const Alternativas1 = () => {
    const [alternativa] = useState(["Parte de um sistema que é oculta para o usuário.","Parte de um sistema que é visivel para o usuario.", 
    "Parte lógica que recebe as regras de negocio.", "Nenhuma das alternativas anteriores." ])

  return (
    <div>
        <ul id = 'r1'>
            {alternativa.map((item,i)=>(
                <li type = 'a' key = {i} id = {i}>{item} <button onClick={() => {Respostas.adicionaResposta()}}>Escolher</button></li>
            ))}
        </ul>

    </div>
  )
}

export default Alternativas1