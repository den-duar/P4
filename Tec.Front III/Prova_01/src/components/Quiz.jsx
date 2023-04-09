/* GRUPO:
Alexandre de Carvalho Paiva
Dennis França de Oliveira Duarte
José Roberto da Silva Junior*/

import React from 'react'
/*import Alternativas1 from './Alternativas1'
import Alternativas2 from './Alternativas2'
import Alternativas3 from './Alternativas3'
import Respostas from './Respostas'
import Finalizar from './Finalizar'*/
import { useState } from 'react'

const Quiz = () => {

  const [q1, setRespondido1] = useState(0)
  const [q2, setRespondido2] = useState(0)
  const [q3, setRespondido3] = useState(0)
  const [respostas,setRespostas] = useState([])
  const [corretas, setCorretas] = useState(0)

  function addRespostas(questao, resposta){
    if(respostas === 3){
      alert('Todas as questões já foram respondidas!')
    }
    else{
      let adicionarQuestao = <p>{questao} <br></br> Escolha: {resposta}</p>
      setRespostas([...respostas, adicionarQuestao])
    }
  }

  function atualizaQ1(a1){
    if (q1 !== 0){
      alert("Questão 1 já respondida!")
    }
    else{
      setRespondido1(1)
      addRespostas('Questão #1', a1)
    }
    if(a1 === 'b'){
      setCorretas(corretas +1)
    }
  }

  function atualizaQ2(a2){
    if (q2 !== 0){
      alert("Questão 2 já respondida!")
    }
    else{
      setRespondido2(1)
      addRespostas('Questão #2', a2)
    }
    if(a2 === 'a'){
      setCorretas(corretas +1)
    }
  }

  function atualizaQ3(a3){
    if (q3 !== 0){
      alert("Questão 3 já respondida!")
    }
    else{
      setRespondido3(1)
      addRespostas('Questão #3',a3)
    }
    if(a3 === 'd'){
      setCorretas(corretas +1)
    }
  }

  function finalizar(){
    if(respostas.length !== 3){
      alert('Você precisa responder todas as perguntas antes de finalizar!')
    }
    else{
      alert(`Você acertou ${corretas}/3`)
      location.reload()
    }
  }

  return (
    <div>
        <h1>Quiz de Front-End</h1>
          <h2>#1 - O que é Front-End?</h2>
          <ol> 
            <li type = 'a'>Parte de um sistema que é oculta para o usuário. <button onClick={()=>{atualizaQ1('a')}}>Escolher</button></li>
            <li type = 'a'>Parte de um sistema que é visivel para o usuario. <button onClick={()=>{atualizaQ1('b')}}>Escolher</button></li>
            <li type = 'a'>Parte lógica que recebe as regras de negocio. <button onClick={()=>{atualizaQ1('c')}}>Escolher</button></li>
            <li type = 'a'>Nenhuma das alternativas anteriores. <button onClick={()=>{atualizaQ1('d')}}>Escolher</button></li>
          </ol>
          <h2>#2 - O que é React JS?</h2>
          <ol>
            <li type = 'a'>Uma poderosa bilioteca JavaScript. <button onClick={()=>{atualizaQ2('a')}}>Escolher</button></li>
            <li type = 'a'>Uma linguagem de programação. <button onClick={()=>{atualizaQ2('b')}}>Escolher</button></li>
            <li type = 'a'>Um servidor de Cloud. <button onClick={()=>{atualizaQ2('c')}}>Escolher</button></li>
            <li type = 'a'>Todas as respostas anteriores. <button onClick={()=>{atualizaQ2('d')}}>Escolher</button></li>
          </ol>
          <h2>#3 - Quais sao as principais tecnologis do mundo Front-end?</h2>
          <ol>
            <li type = 'a'>Java, GoLang e Python. <button onClick={()=>{atualizaQ3('a')}}>Escolher</button></li>
            <li type = 'a'>AWS, Google Cloud e Azure. <button onClick={()=>{atualizaQ3('b')}}>Escolher</button></li>
            <li type = 'a'>Kotlin, HTML e CSS. <button onClick={()=>{atualizaQ3('c')}}>Escolher</button></li>
            <li type = 'a'>HTML, CSS e JavaScript. <button onClick={()=>{atualizaQ3('d')}}>Escolher</button></li>
          </ol>

          <h2>Questões respondidas:</h2>
          {respostas.map((item,i) =>(
            <p key={i}>{item}</p>
          ))}
          <button onClick={ () => {finalizar()}}>Finalizar Quiz</button>
    </div>
  )
}

export default Quiz