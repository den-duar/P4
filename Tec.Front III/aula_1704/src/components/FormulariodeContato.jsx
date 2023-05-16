import React from 'react'
import { useState } from 'react'

const FormulariodeContato = () => {

    const [nome,setNome] = useState()
    const [contato,setContato] = useState()
    const [mensagem, setMensagem] = useState()

    const handleNome = (n) => {
        setNome(n)
    }

    const handleContato = (c) => {
        setContato(c)
    }

    const handleMensagem = (m) =>{
        setMensagem(m)
    }

    const handleSubmit = (s) =>{
        let objetoLiteral = {nome: nome, contato:contato, mensagem:mensagem}
        let json = JSON.stringify(objetoLiteral)
        console.log(json)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input name='nome' type='text' onChange={handleNome}/>
            </label>
            <br/>
            <label>
                Contato:
                <input name='contato' type='text' onChange={handleContato}/>
            </label>
            <br/>
            <label>
                Mensagem:
                <input name='mensagem' type='text' onChange={handleMensagem}/>
            </label>
            <br/>
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default FormulariodeContato