import React from 'react'
import Respostas from './Respostas'

const Finalizar = () => {

    function finalizar(){
        if (Respostas.length < 3){
            alert("Você precisa responder todas as perguntas antes de finalizar!")
        }
    }

  return (
    <div>
        <button onClick={finalizar}>Finalizar Quiz</button>
    </div>
  )
}

export default Finalizar