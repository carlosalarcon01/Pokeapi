import React from 'react'
import Boton from './Boton';
import Contador from './Contador';
import { useState } from 'react';


function Botones(props) {

    const [numClicks, setNumClicks] = useState(0);
    const [mensaje , setMensaje] = useState("");

    const manejarClick = () => {
         setNumClicks(numClicks+1);
         setMensaje("");
    }

    const ReiniciarContador = () => {
        setNumClicks(0);
        setMensaje("Se reinició el contador");
    }


  return (
    <div>
            <p> {mensaje }</p>
            <Contador numeroDeClicks={numClicks}/>
            <Boton  esBotonDeClick={true}  texto="Click" manejarClick={manejarClick}/>
            <Boton  esBotonDeClick={false}  texto="Reiniciar" manejarClick={ReiniciarContador}/>
    </div>
  )
}

export default Botones