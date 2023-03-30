import React from 'react'

const RenderizandoComFuncoes = () => {

    function escolhaDeRendereizacao(oQueRenderizar){
        if(oQueRenderizar === "h1"){
            return <h1>Texto em H1</h1>
        }
        else{
            return <h2>Texto em H2</h2>
        }
    }

  return (
    <div>
        {escolhaDeRendereizacao("h1")}
        {escolhaDeRendereizacao("h2")}
    </div>
  )
}

export default RenderizandoComFuncoes