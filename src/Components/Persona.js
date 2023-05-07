import React from 'react'

function Persona(props) {
  return (

      <div className='col-xl-4 col-sm-12'>
        <div className='card-header'>Nombres: {props.nombre}</div>
        <div className='card-body'>
            Edad: {props.edad}
            <br></br>
            Ciudad: {props.ciudad}            
         </div>

        </div>


  )
}

export default Persona