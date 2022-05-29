import React, { useState } from 'react'
import Boton from './Boton'
import Contador from './Contador'


const ContainerContadorBtns = () => {

const [numeroClics, setnumeroClics] = useState(0)

  const aumentarClics = () => {
    setnumeroClics (numeroClics + 1);
  }

  const reiniciarContador = () => {
    setnumeroClics (0);
  }

  return (
    <>
      <Contador contarClics= {numeroClics} />
      <Boton texto="Clic" clase = {true} manejarClic = {aumentarClics} ></Boton>
      <Boton texto="Reiniciar contador" clase = {false} manejarClic ={reiniciarContador} ></Boton>
    </>
  )
}

export default ContainerContadorBtns