import React from 'react'
import { useState } from 'react'

const Alternativas2 = () => {
    const [alternativa] = useState(["Uma poderosa bilioteca JavaScript", "Uma linguagem de programação.", "Um servidor de Cloud.", "Todas as respostas anteriores."])

  return (
    <div>
        <ul>
            {alternativa.map((item,i) =>(
                <li type = 'a' key = {i}>{item} <button>Escolher</button></li>
            ))}
        </ul>
    </div>
  )
}

export default Alternativas2