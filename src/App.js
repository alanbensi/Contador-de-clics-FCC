import './App.css';
import ContainerContadorBtns from './Componentes/ContainerContadorBtns';


function App() {
  return (
    <div className="App">
      <h1 className='tituloPagina'>Contador de clics</h1>
      <div className='contenedorContadorBotones'>
        <ContainerContadorBtns />
      </div>
    </div>
  );
}

export default App;
