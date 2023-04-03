import React, { useState } from 'react'

const Respostas = () => {
    const [respostas,setRespostas] = useState([])

    function adicionaResposta(resposta){
        setRespostas(resposta)
    }

  return (
    <div>
        <h2>Questões respondidas:</h2>
        <h3>
            {respostas}
        </h3>
    </div>
  )
}

export default Respostas