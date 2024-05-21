import React from 'react'

const Person = (props) => {
    console.log(props);
  return (
    <span>Nombre: {props.name} Apellido: {props.lastName}</span>
  )
}

export default Person