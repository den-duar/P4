import React from 'react'
import Respostas from './Respostas'

const Finalizar = () => {

    function finalizar(){
      
      Respostas.length < 3? alert(`Você acertou ${acertos} /3`):alert("Você precisa respondert odas as perguntas antes de finalizar!")
   
    }

  return (
    <div>
        <button onClick={finalizar}>Finalizar Quiz</button>
    </div>
  )
}

export default Finalizar