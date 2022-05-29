import React from 'react';
import "../Hojas-De-Estilo/Boton.css"

const Boton = ({texto, clase, manejarClic}) => {
  return (
    <button className= {clase ? "botonClic && botones" : "botonReiniciar && botones"} onClick = {manejarClic}>
      {texto}
    </button>
  )
}

export default Boton