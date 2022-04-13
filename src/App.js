import './App.css';
import {Testimonio} from './components/Testimonio'; //Importamos el componente

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Opiniones de los Deportistas</h1>
        <Testimonio
          nombre='Frenkie de Jong'
          pais='Paises Bajos'
          imagen='de-jong'
          cargo='Futbolista'
          equipo='Fc Barcelona'
          testimonio='Estoy muy contento de estar en el Barça. Desde pequeño quería estar aquí, por lo que he hecho realidad mi sueño. Pero me gustaría haber ganado más títulos en estos dos años. Esperaba más en ese sentido. Pero estoy muy feliz aquí y quiero quedarme muchos años' />

        <Testimonio
          nombre="N'Golo Kanté"
          pais='Francia'
          imagen='kante'
          cargo='Futbolista'
          equipo='Chelsea Fc'
          testimonio='Leer el juego no es algo que haya trabajado en particular. Es algo que ha sido parte de mi juego desde que comenzó. Pasaba naturalmente desde que jugaba en la escuela o en la calle. Yo no juego sólo. Están mis compañeros y cuando el equipo es bueno, los resultados son buenos para mí. Yo doy lo mejor siempre por mis compañeros' />
        
        <Testimonio
          nombre='Federico Valverde'
          pais='Uruguay'
          imagen='valverde'
          cargo='Futbolista'
          equipo='Real Madrid'
          testimonio='Es una pena que entre compañeros de profesión no tengamos conciencia. Aquí cada uno nos estamos jugando el pan, sí, pero hay que tener cabeza para no hacer algunas cosas. Se puede ir fuerte, pero nunca con mala intención' />

        <Testimonio
          nombre="Lionel Messi"
          pais='Argentina'
          imagen='mess'
          cargo='Futbolista'
          equipo='PSG'
          testimonio='La verdad tenía ganas, tuve pocos partidos, pude jugar uno solo acá (Parque de los Príncipes). De a poco me voy acostumbrando, adaptándome al equipo y a mis compañeros. Lo más importante es que hoy se ganó, hay que seguir y mirar lo que viene ahora' />
      </div>
    </div>
  );
}

export default App;
