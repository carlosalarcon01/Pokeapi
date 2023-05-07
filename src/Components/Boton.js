import React from 'react'

function Boton(props) {
  return (
        <button
        className={ props.esBotonDeClick ? "btn btn-primary" : "btn btn-danger" } onClick={props.manejarClick}>
            {props.texto}
        </button>
  )
}

export default Boton