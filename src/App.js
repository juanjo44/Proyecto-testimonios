import logo from './logo.svg';
import './App.css';
import {Testimonio} from './components/Testimonio'; //Importamos el componente

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Opiniones de los Deportistas</h1>
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
