import React from "react";
import '../css/Testimonio.css'

//Componente de funcion, retorn un elemento jsx
export function Testimonio(){
  return (
    <div className="contenedor-testimonio">
      <img
        className='imagen-testimonio'
        src={require('../images/de-jong.jpg')} //require porque estamos seleccionando desde el javascript
        alt='Imagen de De Jong'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Frenkie de Jong</p>
        <p className='cargo-testimonio'>Futbolista Holandes en Fc Barcelona</p>
        <p className='texto-testimonio'>Estoy muy contento de estar en el Barça. Desde pequeño quería estar aquí, por lo que he hecho realidad mi sueño. Pero me gustaría haber ganado más títulos en estos dos años. Esperaba más en ese sentido. Pero estoy muy feliz aquí y quiero quedarme muchos años</p>
      </div>
    </div>
  );
}