import {useState} from 'react'

const HookMegasena = () => {
    const [numero, setNumero] = useState()
    const [array, setArray] = useState([])

    function sortearNumero(){
        let sorteado = Math.floor(Math.random()*60) + 1
        if(array.length < 6){
            setNumero(sorteado)
            setArray([...array, sorteado])
        }else{
            alert('Ja temos os 6 numeros sorteados!')
        }
    }

  return (
    <div>
        <h1>Sorteador da Mega em React! :D</h1>
        <button onClick={sortearNumero}>Sortear numero</button>
        <h1>Ultimo numero sorteado: {numero}</h1>
        <h1>Sorteados: {array.join(" - ")}</h1>
    </div>
  )
}

export default HookMegasena