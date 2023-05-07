import React, { useEffect } from 'react';
import { useState } from 'react';
import './misEstilos.css';

function ListaProductos() {

  let img = 0;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=905')
      .then((response) => response.json())
      .then((data) => {
          console.log(data.results);
          setItems(data.results);
      })
      .catch((err) => {
          console.log(err.message);
      });
  }, []);



  return (
    <div className="container">      
      <div className="row">
      {
      items.map((item) => {        
        img +=1;
        return (
          <div className="col-xl-2 col-sm-6 col-md-6 col" >
          <div className='card' id="card-poke">
            <div className='card-body'> 
                <h6>{item.name}</h6>
                <img className="foto-pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+img+".png"} />
              </div>
              </div>
              </div>
         );
      })}        
      </div>
    </div>
  )
}

export default ListaProductos