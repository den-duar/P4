import React from 'react'
import { useState } from 'react'

const Alternativas3 = () => {
    const [alternativa] = useState(["Java, GoLang e Python.", "AWS, Google Cloud e Azure.", "Kotlin, HTML e CSS.", "HTML, CSS e JavaScript."])

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

export default Alternativas3