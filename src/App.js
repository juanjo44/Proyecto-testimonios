import logo from './logo.svg';
import './App.css';
import {Testimonio} from './components/Testimonio'; //Importamos el componente

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principa'>
        <h1>Opiniones de los Deportistas</h1>
        <Testimonio
        nombre='Frenkie de Jong'
        pais='Paises Bajos'
        imagen=''
        cargo='Futbolista'
        equipo='Fc Barcelona'
        testimonio='Estoy muy contento de estar en el Barça. Desde pequeño quería estar aquí, por lo que he hecho realidad mi sueño. Pero me gustaría haber ganado más títulos en estos dos años. Esperaba más en ese sentido. Pero estoy muy feliz aquí y quiero quedarme muchos años'/>
      </div>
    </div>
  );
}

export default App;
