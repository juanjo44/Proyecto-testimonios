import React from "react";
import '../css/Testimonio.css'

//Componente de funcion, retorn un elemento jsx
export function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
      <img
        className='imagen-testimonio'
        src={require(`../images/testimonio-${props.imagen}.jpg`)} //require porque estamos seleccionando desde el javascript
        alt='Imagen de De Jong'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> de {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.equipo}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}