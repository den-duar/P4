import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    if (props.mes === 'Setembro'){
        return (
            <div className = {styles.setembro}> Prevenção ao suicidio</div>
        )
    }
    else if(props.mes === 'Outubro'){
        return (
            <div className = {styles.outubro}>Conscientização ao cancer de mama</div>
        )
    }
    else if(props.mes === 'Novembro'){
        return (
            <div className = {styles.novembro}>Prevenção e combate ao cancer de prostata</div>
            )
    }
    else{
        return(
            (
            <div className = {styles.nenhum}>Site de campanhas</div>
            )
        )
    }
}

export default Campanha