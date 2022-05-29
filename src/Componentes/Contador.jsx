import React from 'react'
import "../Hojas-De-Estilo/Contador.css"

const Contador = ({contarClics}) => {
  return (
    <div className='contenedorContadorClics'>
      {contarClics}
    </div>
  )
}

export default Contador